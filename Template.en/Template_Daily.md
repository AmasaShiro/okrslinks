---
created: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
updated: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
tags: daily
---
<%* const o = await tp.user.okrslinks(tp); -%>
# 📔Daily Review <% o.titleDate %>

Author: <% o.authorName %>
**Published: <% o.publishedDate %>**  Created: <% o.createdDate %>
[[<% o.weekly %>|📙weekly]]  [[<% o.monthly %>|📗Monthly]]  [[<% o.quarterly %>|📘Quarterly]]  [[<% o.yearly%>|📕Yearly]]  [[<% o.corePrinciplesNote %>|🧭Core Principles]]
**[[<% o.prev %>|⬅️⬅️ Yesterday ⬅️⬅️]]**   |   **[[<% o.next %>|➡️➡️ Tomorrow ➡️➡️]]**
![[<% o.monthly %>#OKRs]]
![[<% o.monthly %>#Initiatives]]
![[<% o.weekly %>#Initiatives]]
![[<% o.prev %>#Backlogs🪵]]
```ad-hint
title: Tasks is the subdivided initiatives.
collapse: close
- Tasks are breakdown of initiatives and selections from the backlogs.
- Think about what you specifically want to accomplish today.
```

## Tasks

- Task 1: <% tp.file.cursor() %>
- Task 2: 
- Task 3: 

## Review

### Results

- Result 1: 
- Result 2: 
- Result 3: 

### Impression

- Good👍
	- Impression and the effect for monthly OKRs.
- Bad👎
	- Impression, the reasons and the effect for monthly OKRs.

### Backlogs🪵

- backlog 1 
- backlog 2 

<% o.thinoPlace %>

## End of document
