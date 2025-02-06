---
created: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
updated: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
tags: weekly
---
<%* const o = await tp.user.okrslinks(tp); -%>
# 📙Weekly Review <% o.titleDate %>

Author: <% o.authorName %>
**Published: <% o.publishedDate %>**  Created: <% o.createdDate %>
[[<% o.monthly %>|📗Monthly]]  [[<% o.quarterly %>|📘Quarterly]]  [[<% o.yearly%>|📕Yearly]]  [[<% o.corePrinciplesNote %>|🧭Core Principles]]
**[[<% o.prev %>|⬅️⬅️ Last Week ⬅️⬅️]]**   |   **[[<% o.next %>|➡️➡️ Next Week ➡️➡️]]**
![[<% o.monthly %>#OKRs]]
![[<% o.monthly %>#Initiatives]]
![[<% o.prev %>#Backlogs🪵]]
```ad-hint
title: Initiatives: Action Plan for Key Results
collapse: close
- Initiatives are the actionable steps taken to deliver on Key Results. They are essentially projects or larger tasks.
- Effective initiatives should be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.
```

## Initiatives

- Initiatives 1: <% tp.file.cursor() %>
- Initiatives 2: 
- Initiatives 3: 

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
