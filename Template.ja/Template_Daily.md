---
created: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
updated: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
tags: daily
---
<%* const o = await tp.user.okrslinks(tp); -%>
# 📔日次レビュー <% o.titleDate %>

作成者: <% o.authorName %>
**発行日: <% o.publishedDate %>**  作成日: <% o.createdDate %>
[[<% o.weekly %>|📙週次]]  [[<% o.monthly %>|📗月次]]  [[<% o.quarterly %>|📘期毎]]  [[<% o.yearly%>|📕年次]]  [[<% o.corePrinciplesNote %>|🧭基本原則]]
**[[<% o.prev %>|⬅️⬅️ 昨日 ⬅️⬅️]]**   |   **[[<% o.next %>|➡️➡️ 明日 ➡️➡️]]**
![[<% o.monthly %>#OKRs]]
![[<% o.monthly %>#取り組み]]
![[<% o.weekly %>#取り組み]]
![[<% o.prev %>#バックログ🪵]]
```ad-hint
title: タスクは細分化された取り組み
collapse: close
- タスクは取り組みを細分化したもの
- またバックログから慎重に選択したもの
- 特に今日なにを達成したいかを考えてみよう
```

## タスク

- タスク 1: <% tp.file.cursor() %>
- タスク 2: 
- タスク 3: 

## レビュー

### 結果

- 結果 1: 
- 結果 2: 
- 結果 3: 

### 所感

- 良かったところ👍
	- 所感とOKRsへの影響
- よくなかったところ👎
	- 所感、良くなかった理由、またOKRsへの影響

### バックログ🪵

- バックログ 1 
- バックログ 2 

<% o.thinoPlace %>

## 以上
