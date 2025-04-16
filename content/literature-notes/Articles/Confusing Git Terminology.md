---
author: "[[Julia Evans]]"
title: 'Confusing Git Terminology'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Julia Evans]]
- Full Title: Confusing Git Terminology
- URL: https://news.dataelixir.com/t/t-l-vtytrdl-jtuylyjttl-o/

## Highlights
- • heads” are “branches”. Internally in git, branches are stored in a directory called `.git/refs/heads`. (technically the [official git glossary](https://git-scm.com/docs/gitglossary) says that the branch is all the commits on it and the head is just the most recent commit, but they’re 2 different ways to think about the same thing)
  • `HEAD` is the current branch. It’s stored in `.git/HEAD`.
  I think that “a `head` is a branch, `HEAD` is the current branch” is a good candidate for the weirdest terminology choice in git, but it’s definitely too late for a clearer naming scheme so let’s move on. ([View Highlight](https://read.readwise.io/read/01herjf3cv0p2mpaa1v28v4k23))
- Here’s the deal with this message:
  • In Git, usually you have a “current branch” checked out, for example `main`.
  • The place the current branch is stored is called `HEAD`.
  • Any new commits you make will get added to your current branch, and if you run `git merge other_branch`, that will also affect your current branch
  • But `HEAD` doesn’t **have** to be a branch! Instead it can be a commit ID.
  • Git calls this state (where HEAD is a commit ID instead of a branch) “detached HEAD state”
  • For example, you can get into detached HEAD state by checking out a tag, because a tag isn’t a branch
  • if you don’t have a current branch, a bunch of things break:
  • `git pull` doesn’t work at all (since the whole point of it is to update your current branch)
  • neither does `git push` unless you use it in a special way
  • `git commit`, `git merge`, `git rebase`, and `git cherry-pick` **do** still work, but they’ll leave you with “orphaned” commits that aren’t connected to any branch, so those commits will be hard to find ([View Highlight](https://read.readwise.io/read/01herjg8xrgmpv6r7k8amg3jzx))
- If you have a merge conflict, you can run `git checkout --ours file.txt` to pick the version of `file.txt` from the “ours” side. But which side is “ours” and which side is “theirs”?
  I always find this confusing and I never use `git checkout --ours` because of that, but I looked it up to see which is which.
  For merges, here’s how it works: the current branch is “ours” and the branch you’re merging in is “theirs”, like this. ([View Highlight](https://read.readwise.io/read/01herjh0svm1hdkgtb4abaaqen))
- I think the reason for this is that under the hood `git rebase main` is repeatedly merging commits from the current branch into a copy of the `main` branch (you can see what I mean by that in [this weird shell script the implements `git rebase` using `git merge`](https://gist.github.com/jvns/0f45c910ea2d255c6e130299c99c3123). But I still find it confusing.
  [This nice tiny site](https://nitaym.github.io/ourstheirs/) explains the “ours” and “theirs” terms.
  A couple of people also mentioned that VSCode calls “ours”/“theirs” “current change”/“incoming change”, and that it’s confusing in the exact same way. ([View Highlight](https://read.readwise.io/read/01herjhm8818btnn63a9en478h))
- This message seems straightforward – it’s saying that your `main` branch is up to date with the origin!
  But it’s actually a little misleading. You might think that this means that your `main` branch is up to date. It doesn’t. What it **actually** means is – if you last ran `git fetch` or `git pull` 5 days ago, then your `main` branch is up to date with all the changes **as of 5 days ago**.
  So if you don’t realize that, it can give you a false sense of security.
  I think git could theoretically give you a more useful message like “is up to date with the origin’s `main` **as of your last fetch 5 days ago**” because the time that the most recent fetch happened is stored in the reflog, but it doesn’t. ([View Highlight](https://read.readwise.io/read/01herjje1js7e2mw3sjhcxnmxv))
- I’ve known for a long time that `HEAD^` refers to the previous commit, but I’ve been confused for a long time about the difference between `HEAD~` and `HEAD^`.
  I looked it up, and here’s how these relate to each other:
  • `HEAD^` and `HEAD~` are the same thing (1 commit ago)
  • `HEAD^^^` and `HEAD~~~` and `HEAD~3` are the same thing (3 commits ago)
  • `HEAD^3` refers the the third parent of a commit, and is different from `HEAD~3` ([View Highlight](https://read.readwise.io/read/01herjkk7yhz9nw04m9jbgcx5f))
- Most commits have only one parent. But merge commits have multiple parents – they’re merging together 2 or more commits. In Git `HEAD^` means “the parent of the HEAD commit”. But what if HEAD is a merge commit? What does `HEAD^` refer to?
  The answer is that `HEAD^` refers to the the **first** parent of the merge, `HEAD^2` is the second parent, `HEAD^3` is the third parent, etc.
  But I guess they also wanted a way to refer to “3 commits ago”, so `HEAD^3` is the third parent of the current commit (which may have many parents if it’s a merge commit), and `HEAD~3` is the parent’s parent’s parent.
  I think in the context of the merge commit ours/theirs discussion earlier, `HEAD^` is “ours” and `HEAD^2` is “theirs”. ([View Highlight](https://read.readwise.io/read/01herjm2yx10wgysc12x78xtsp))
- Here are some short descriptions of what they each do:
  • `git revert COMMIT`: Create a new commit that’s the “opposite” of COMMIT on your current branch (if COMMIT added 3 lines, the new commit will delete those 3 lines)
  • `git reset --hard COMMIT`: Force your current branch back to the state it was at `COMMIT`, erasing any new changes since `COMMIT`. Very dangerous operation.
  • `git restore --source=COMMIT PATH`: Take all the files in `PATH` back to how they were at `COMMIT`, without changing any other files or commit history. ([View Highlight](https://read.readwise.io/read/01herjqfxm1tys22nb28w6hrpb))
- Checkout does two totally unrelated things:
  • `git checkout BRANCH` switches branches
  • `git checkout file.txt` discards your unstaged changes to `file.txt`
  This is well known to be confusing and git has actually split those two functions into `git switch` and `git restore` (though you can still use checkout if, like me, you have 15 years of muscle memory around `git checkout` that you don’t feel like unlearning)
  Also personally after 15 years I still can’t remember the order of the arguments to `git checkout main file.txt` for restoring the version of `file.txt` from the `main` branch.
  I think sometimes you need to pass `--` to `checkout` as an argument somewhere to help it figure out which argument is a branch and which ones are paths but I never do that and I’m not sure when it’s needed. ([View Highlight](https://read.readwise.io/read/01herjr7d1pmppw2ag8nsvxef5))
- A bunch of people mentioned being confused about the difference between merge and rebase and not understanding what the “base” in rebase was supposed to be.
  I’ll try to summarize them very briefly here, but I don’t think these 1-line explanations are that useful because people structure their workflows around merge / rebase in pretty different ways and to really understand merge/rebase you need to understand the workflows. Also pictures really help. That could really be its whole own blog post though so I’m not going to get into it.
  • merge creates a single new commit that merges the 2 branches
  • rebase copies commits on the current branch to the target branch, one at a time.
  • cherry-pick is similar to rebase, but with a totally different syntax (one big difference is that rebase copies commits FROM the current branch, cherry-pick copies commits TO the current branch) ([View Highlight](https://read.readwise.io/read/01herjs2cg55k7e9pgypg3msqx))
