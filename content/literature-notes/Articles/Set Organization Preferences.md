---
author: "[[Claude Help Center]]"
title: 'Set Organization Preferences'
date: "2026-04-20"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://downloads.intercomcdn.com/i/o/lupk8zyo/792494/717b10d3ebd874823db64841659b/76f3062d78ebbb04863fb1de3ef9cca0.png)

## Metadata
- Author: [[Claude Help Center]]
- Full Title: Set Organization Preferences
- URL: https://support.claude.com/en/articles/14546867-set-organization-preferences?utm_source=it&utm_medium=email&utm_campaign=2026_Q2_PMM_MKTG_Apr17_PMMNewsletter_Ent_admins&utm_term=ent_admins&utm_content=inline_link&campaign=17741292

## Highlights
- Organization preferences let Admins and above on Team and Enterprise plans set custom instructions that Claude follows in every conversation across your organization. Use them to apply communication standards, formatting requirements, compliance guidance, or domain-specific context that should show up everywhere your team works with Claude. ([View Highlight](https://read.readwise.io/read/01kpp86kyz232xzzpb4v8www31))
- How organization and user preferences interact
  Claude supports two levels of preference instructions. Understanding how they interact helps admins and the people on your team get the most out of both.
  **Level**
  **Set by**
  **Scope**
  **Visibility**
  Organization preferences
  Admins, Owners, and Primary Owners
  All people in your organization, every conversation
  Only Admins and above can view or edit
  Individual user preferences
  Each user
  That individual’s conversations only
  Only that user can view or edit
  When both are set, organization preferences take precedence. If an individual preference directly contradicts an organization preference, Claude favors the organization-level instruction. For example, if an organization preference says “Always respond in formal English” but an individual preference says “use a casual tone,” Claude responds formally.
  Individual preferences still apply for anything the organization preferences don’t address.
  **Note:** Preference prioritization relies on prompt-level instructions. In rare edge cases involving directly contradictory instructions, behavior may vary. Test your preferences to confirm they produce the results you expect. ([View Highlight](https://read.readwise.io/read/01kpp87dd3hd6ak50a4bj0m5my))
- Best practices
  **Keep instructions concise and clear.** Organization preferences are included in every message sent by everyone in your organization, so shorter instructions help keep conversations efficient. Aim for direct, specific guidance rather than lengthy explanations.
  **Be specific about what you want.** Instead of vague instructions like “be professional,” give concrete direction such as “Respond in formal English. Don’t use contractions, slang, or emojis.”
  **Focus on consistent behaviors.** Organization preferences work best for instructions that should apply uniformly across every conversation—response formatting standards, tone requirements, or organization-wide context.
  **Avoid conflicting instructions.** If your organization preferences contradict each other, Claude may not follow either one reliably. Review your preferences as a whole to make sure they’re consistent.
  **Don’t try to override safety behaviors.** Organization preferences can’t disable Claude’s built-in safety guidelines or content policies. Instructions that conflict with Claude’s core training won’t be followed.
  **Test your preferences.** After saving, start a new conversation to verify Claude is following your instructions. Try a few different types of questions to confirm the preferences work across a range of topics.
  **Review and update regularly.** As your organization’s needs change, revisit your preferences to make sure they’re still relevant. Removing outdated instructions keeps Claude’s responses focused. ([View Highlight](https://read.readwise.io/read/01kpp87r4a1t19vyenm4h3qfkg))
- Example preferences
  **Team identity.** “Address the team as the Acme Platform team. When users ask about ‘our product,’ they mean Acme Cloud.”
  **Communication standards.** “Respond in formal English. Use active voice. Avoid contractions and emojis.”
  **Response formatting.** “Prefer concise responses under 300 words. Use bullet points for lists with three or more items.”
  **Domain context.** “Our team works in healthcare claims processing. When users mention ‘claims,’ they’re referring to insurance claims, not legal claims.”
  **Referral guidance.** “When users ask about HR policies, direct them to [hr@acme.com](mailto:hr@acme.com) rather than giving specific policy advice.”
  **Data handling reminders.** “Don’t include customer names, account numbers, or other personally identifiable information in responses or generated artifacts.” ([View Highlight](https://read.readwise.io/read/01kpp87wza388438ff9c7yvjj8))
