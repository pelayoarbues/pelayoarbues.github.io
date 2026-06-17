---
title: How I Manage Myself and My Team Using Obsidian Tasks
date: 2024-10-14
tags:
  - permanent-note
  - productivity
  - management
---
![Lo-fi inspired image created on Mystic v2 by Maginific](notes/attachments/tasks-desktop.webp)

Tracking my work, and my team’s, can sometimes be difficult. At work, we use internal tools to report project progress and pending tasks. These tools help manage user stories and other similar items. However, I find them excessive for remembering smaller tasks. For example, I might need to send an email, talk to a manager about a project, or schedule a meeting—simple, mundane tasks I don’t want to forget but don’t warrant a formal ticket. Opening a ticket in the system takes too long for individual tasks like these, and sharing them within the system doesn’t make sense.

[I rely heavily on paper](mocs/ai.md). Since 2017, I’ve used dotted [Leuchtturm1917 notebooks](https://leuchtturm1917shop.es/libretas/3-361-libreta-coleccion-general#/5-pautado-puntos/9-tapa-tapa_dura/13-tamano-a5_medium/17-color-negro) in a [Bullet Journal](https://bulletjournal.com/) style. I prefer to take notes by hand, especially during face-to-face meetings. However, since shifting to remote work, writing on paper has become less convenient. It’s harder to look at notes and stay engaged on a video call. Also, while bullet journaling worked well when I only tracked my own tasks, it became inefficient when I started managing multiple initiatives. I found myself spending too much time processing notes and searching for uncompleted tasks.

Over the past few years, I’ve leaned more on [Obsidian](https://obsidian.md/) for writing, [publishing my blog](My%20workflow%20for%20my%20public%20second%20brain.md), and also tracking tasks. The [Tasks plugin](https://publish.obsidian.md/tasks/Introduction) fits perfectly into my workflow. Tools like Todoist or Trello could also work, but Obsidian Tasks integrates seamlessly with how I already use Obsidian. Here’s how I use it.

## Obsidian tasks and Daily Notes

[Obsidian Tasks](https://publish.obsidian.md/tasks/Introduction) lets me create tasks quickly. I just write a sentence, set a due date, and mark the importance. I usually do this on the go—during meetings or when a thought strikes that needs follow-up. Sometimes I jot down tasks in my notebook and later transfer them into Obsidian, but during video calls, it’s more practical to type directly. I’ve found this system especially helpful during One-on-One meetings, but more on that later. First, let me walk you through how I review tasks.

Creating tasks is easy, but the real productivity comes from how I process them. As mentioned, I assign each task a due date and priority. These two factors are key to building an [Eisenhower Matrix](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method).

![Eisenhower matrix from Wikipedia](notes/attachments/Eisenhower_matrix.svg)

The matrix is a simple, yet effective time management tool that keeps me focused. Each day starts with me clicking the Daily Note button in Obsidian. This action generates a new daily note based on a template I’ve set up. [Templater](https://github.com/SilentVoid13/Templater) is the plugin that powers it, allowing me to use variables, functions, and even execute JavaScript within my notes.

> [!tip]- Daily note template 
```javascript

# <% tp.file.title %>

<< [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]>>

## Tasks

#### New Today
- 

### URGENT + IMPORTANT
*Do it now*

"``` tasks
not done
priority is above none
happens before in one week
hide due date
hide edit button
hide priority
show backlink
sort by priority, due
short mode
```"

### URGENT, NOT IMPORTANT
*Delegate or do it after tasks above*

"``` tasks
not done
(priority is low) OR (priority is none)
happens before in one week
hide due date
hide edit button
hide priority
show backlink
sort by priority, due
short mode
"```

### IMPORTANT, NOT URGENT
*Decide when to do it*

"``` tasks
not done
(no due date) OR NOT (happens before in one week)
priority is above none
hide due date
hide edit button
hide priority
show backlink
sort by priority, due
short mode
"```

### NOT URGENT, NOT IMPORTANT
*Do it later / Dump it*

"``` tasks
not done
(no due date) OR NOT (happens before in one week)
(priority is low) OR (priority is none)
status.name includes todo
hide due date
hide edit button
hide priority
show backlink
sort by priority, due
short mode
"```


### Done today

"```tasks
done on {{date:YYYY-MM-DD}}
"```

## Daily Log
- 

```

This renders a Daily Note like this:

![Daily Notes example](notes/attachments/daily-note.png)

Each morning, I check tasks by importance and urgency. I also review and adjust priorities as needed. This way, I rarely miss a task or waste time on trivial issues.

## On One-on-Ones

In addition to reviewing tasks each morning, I use a One-on-One template for my meetings with my boss, fellow managers, and team members. For each one-on-one, I create a dedicated note for that person in my One-on-Ones folder. The system prompts me for the person’s name, moves the note to the right folder, and displays tasks related to them.

Here’s the template I use:

> [!tip]- One on One note template 
```javascript
<%*
let qcFileName = await tp.system.prompt("Note Title")
titleName = "1on1-" + qcFileName + "-" + tp.date.now("YYYYMMDD")
await tp.file.rename(titleName)
await tp.file.move("Projects/Management/One-on-Ones/"+ qcFileName + "/" + titleName);
-%>
---
title:  "<% titleName %>"
Date: <% tp.date.now() %>
tags: 
- work/1on1 
---

Date: <% tp.date.now() %>
Attendees: <% qcFileName %>
tags: #work/1on1 #<% qcFileName %>

<% tp.file.cursor(1) %>

# Agenda
1. 

# Notes
- 

# New tasks


# Tasks

"``` tasks
not done
(path includes <% qcFileName %>) OR (description includes <% qcFileName %>)
hide edit button
show backlink
short mode
sort by priority, due
"```
```

This generates a note like this:

![One on one example](notes/attachments/one-on-one.png)

It helps me quickly see which tasks are related to John. This way, I can build an agenda and keep track of progress with relevant dates. When reviewing the agenda, I can also check if there are any tasks I need to discuss with that person.

That’s the simple workflow I use to manage myself and others. It keeps me focused on important things and ensures I never miss deadlines.

One final, and not-so-related, tip: Remember to set aside time for [headspace](Headspace%20for%20managers.md) and learn to compartmentalize, especially after tough conversations.