---
author: [[cbeams]]
title: "How to Write a Git Commit Message"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://cbea.ms/content/images/2021/01/git_commit_2x.png)

## Metadata
- Author: [[cbeams]]
- Full Title: How to Write a Git Commit Message
- URL: https://cbea.ms/git-commit/

## Highlights
- Why good commit messages matter
  If you browse the log of any random Git repository, you will probably find its commit messages are more or less a mess. ([View Highlight](https://read.readwise.io/read/01j5t88fyb2j5enfm78nwywwfq))
- a well-crafted Git commit message is the best way to communicate *context* about a change to fellow developers (and indeed to their future selves). A diff will tell you *what* changed, but only the commit message can properly tell you *why*. Peter Hutterer [makes this point](http://who-t.blogspot.co.at/2009/12/on-commit-messages.html) well:
  > Re-establishing the context of a piece of code is wasteful. We can’t avoid it completely, so our efforts should go to [reducing it](http://www.osnews.com/story/19266/WTFs_m) [as much] as possible. Commit messages can do exactly that and as a result, *a commit message shows whether a developer is a good collaborator*. ([View Highlight](https://read.readwise.io/read/01j5t8b3p3ehxngvqkvedgdqy9))
- If you haven’t given much thought to what makes a great Git commit message, it may be the case that you haven’t spent much time using `git log` and related tools. There is a vicious cycle here: because the commit history is unstructured and inconsistent, one doesn’t spend much time using or taking care of it. And because it doesn’t get used or taken care of, it remains unstructured and inconsistent. ([View Highlight](https://read.readwise.io/read/01j5t8bdepwnx644vf2kr6fkjx))
- But a well-cared for log is a beautiful and useful thing. `git blame`, `revert`, `rebase`, `log`, `shortlog` and other subcommands come to life. Reviewing others’ commits and pull requests becomes something worth doing, and suddenly can be done independently. Understanding why something happened months or years ago becomes not only possible but efficient. ([View Highlight](https://read.readwise.io/read/01j5t8bqhppfwq7fqewfs0qk9z))
- n order to create a useful revision history, teams should first agree on a commit message convention that defines at least the following three things:
  **Style.** Markup syntax, wrap margins, grammar, capitalization, punctuation. Spell these things out, remove the guesswork, and make it all as simple as possible. The end result will be a remarkably consistent log that’s not only a pleasure to read but that actually *does get read* on a regular basis.
  **Content.** What kind of information should the body of the commit message (if any) contain? What should it *not* contain?
  **Metadata.** How should issue tracking IDs, pull request numbers, etc. be referenced? ([View Highlight](https://read.readwise.io/read/01j5t8cxezynvs91xgmah2qqjh))
- • [Separate subject from body with a blank line](https://cbea.ms/git-commit#separate)
  • [Limit the subject line to 50 characters](https://cbea.ms/git-commit#limit-50)
  • [Capitalize the subject line](https://cbea.ms/git-commit#capitalize)
  • [Do not end the subject line with a period](https://cbea.ms/git-commit#end)
  • [Use the imperative mood in the subject line](https://cbea.ms/git-commit#imperative)
  • [Wrap the body at 72 characters](https://cbea.ms/git-commit#wrap-72)
  • [Use the body to explain *what* and *why* vs. *how*](https://cbea.ms/git-commit#why-not-how) ([View Highlight](https://read.readwise.io/read/01j5t8d9zs07eq7cx0pvvmry0q))
- 1. Separate subject from body with a blank line
  From the `git commit` [manpage](https://www.kernel.org/pub/software/scm/git/docs/git-commit.html#_discussion):
  > Though not required, it’s a good idea to begin the commit message with a single short (less than 50 character) line summarizing the change, followed by a blank line and then a more thorough description. The text up to the first blank line in a commit message is treated as the commit title, and that title is used throughout Git. For example, Git-format-patch(1) turns a commit into email, and it uses the title on the Subject line and the rest of the commit in the body.
  Firstly, not every commit requires both a subject and a body. Sometimes a single line is fine, especially when the change is so simple that no further context is necessary. ([View Highlight](https://read.readwise.io/read/01j5t8f8mx3dkv60gj6qmte1qk))
- 50 characters is not a hard limit, just a rule of thumb. Keeping subject lines at this length ensures that they are readable, and forces the author to think for a moment about the most concise way to explain what’s going on.
  > *Tip: If you’re having a hard time summarizing, you might be committing too many changes at once. Strive for [atomic commits](https://www.freshconsulting.com/atomic-commits/) (a topic for a separate post).* ([View Highlight](https://read.readwise.io/read/01j5t8h25y2fhvnbpdja92kv5m))
- 3. Capitalize the subject line
  This is as simple as it sounds. Begin all subject lines with a capital letter. ([View Highlight](https://read.readwise.io/read/01j5t8haq7d5j4weqh720t8fk6))
- 4. Do not end the subject line with a period
  Trailing punctuation is unnecessary in subject lines. Besides, space is precious when you’re trying to keep them to [50 chars or less](https://cbea.ms/posts/git-commit/#limit-50). ([View Highlight](https://read.readwise.io/read/01j5t8hha0nveqwfdax0kpn1xh))
- 5. Use the imperative mood in the subject line
  *Imperative mood* just means “spoken or written as if giving a command or instruction” ([View Highlight](https://read.readwise.io/read/01j5t8hv3a39kzab7ms7njgz6q))
- The imperative can sound a little rude; that’s why we don’t often use it. But it’s perfect for Git commit subject lines. One reason for this is that **Git itself uses the imperative whenever it creates a commit on your behalf**. ([View Highlight](https://read.readwise.io/read/01j5t8j830xgsjrjmem3b3385f))
- So when you write your commit messages in the imperative, you’re following Git’s own built-in conventions. For example:
  • Refactor subsystem X for readability
  • Update getting started documentation
  • Remove deprecated methods
  • Release version 1.0.0
  Writing this way can be a little awkward at first. We’re more used to speaking in the *indicative mood*, which is all about reporting facts. That’s why commit messages often end up reading like this:
  • Fixed bug with Y
  • Changing behavior of X
  And sometimes commit messages get written as a description of their contents:
  • More fixes for broken stuff
  • Sweet new API methods
  To remove any confusion, here’s a simple rule to get it right every time. ([View Highlight](https://read.readwise.io/read/01j5t8jvtyhady4aq3rjn0zy8z))
- **A properly formed Git commit subject line should always be able to complete the following sentence**:
  • If applied, this commit will *your subject line here*
  For example:
  • If applied, this commit will *refactor subsystem X for readability*
  • If applied, this commit will *update getting started documentation*
  • If applied, this commit will *remove deprecated methods*
  • If applied, this commit will *release version 1.0.0*
  • If applied, this commit will *merge pull request #123 from user/branch*
  Notice how this doesn’t work for the other non-imperative forms:
  • If applied, this commit will *fixed bug with Y*
  • If applied, this commit will *changing behavior of X*
  • If applied, this commit will *more fixes for broken stuff*
  • If applied, this commit will *sweet new API methods*
  > *Remember: Use of the imperative is important only in the subject line. You can relax this restriction when you’re writing the body.* ([View Highlight](https://read.readwise.io/read/01j5t8kbtmh3265985ea36z4m9))
- 6. Wrap the body at 72 characters
  Git never wraps text automatically. When you write the body of a commit message, you must mind its right margin, and wrap text manually.
  The recommendation is to do this at 72 characters, so that Git has plenty of room to indent text while still keeping everything under 80 characters overall.
  A good text editor can help here. ([View Highlight](https://read.readwise.io/read/01j5t8m3tjmjd2x4acbshb60rt))
- 7. Use the body to explain what and why vs. how
  This [commit from Bitcoin Core](https://github.com/bitcoin/bitcoin/commit/eb0b56b19017ab5c16c745e6da39c53126924ed6) is a great example of explaining what changed and why:
  commit eb0b56b19017ab5c16c745e6da39c53126924ed6
  Author: Pieter Wuille <pieter.wuille@gmail.com>
  Date: Fri Aug 1 22:57:55 2014 +0200
  Simplify serialize.h's exception handling
  Remove the 'state' and 'exceptmask' from serialize.h's stream
  implementations, as well as related methods.
  As exceptmask always included 'failbit', and setstate was always
  called with bits = failbit, all it did was immediately raise an
  exception. Get rid of those variables, and replace the setstate
  with direct exception throwing (which also removes some dead
  code).
  As a result, good() is never reached after a failure (there are
  only 2 calls, one of which is in tests), and can just be replaced
  by !eof().
  fail(), clear(n) and exceptions() are just never called. Delete
  them.
  Take a look at the [full diff](https://github.com/bitcoin/bitcoin/commit/eb0b56b19017ab5c16c745e6da39c53126924ed6) and just think how much time the author is saving fellow and future committers by taking the time to provide this context here and now. If he didn’t, it would probably be lost forever. ([View Highlight](https://read.readwise.io/read/01j5t8mbfhwqgk46qf4ptng6p8))
- Learn to love the command line. Leave the IDE behind.
  For as many reasons as there are Git subcommands, it’s wise to embrace the command line. Git is insanely powerful; IDEs are too, but each in different ways. I use an IDE every day (IntelliJ IDEA) and have used others extensively (Eclipse), but I have never seen IDE integration for Git that could begin to match the ease and power of the command line (once you know it).
  Certain Git-related IDE functions are invaluable, like calling `git rm` when you delete a file, and doing the right stuff with `git` when you rename one. Where everything falls apart is when you start trying to commit, merge, rebase, or do sophisticated history analysis through the IDE.
  When it comes to wielding the full power of Git, it’s command-line all the way. ([View Highlight](https://read.readwise.io/read/01j5t8n2s01qt023zf379bwds9))
