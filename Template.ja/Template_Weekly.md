---
created: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
updated: <% tp.date.now("YYYY-MM-DD[T]HH:mm:ss") %>
tags: weekly
---
<%* const o = await tp.user.okrslinks(tp); -%>
# 📙週次レビュー <% o.titleDate %>

作成者: <% o.authorName %>
**発行日: <% o.publishedDate %>**  作成日: <% o.createdDate %>
[[<% o.monthly %>|📗月次]]  [[<% o.quarterly %>|📘期毎]]  [[<% o.yearly%>|📕年次]]  [[<% o.corePrinciplesNote %>|🧭基本原則]]
**[[<% o.prev %>|⬅️⬅️ 先週 ⬅️⬅️]]**   |   **[[<% o.next %>|➡️➡️ 来週 ➡️➡️]]**
![[<% o.monthly %>#OKRs]]
![[<% o.monthly %>#取り組み]]
![[<% o.prev %>#バックログ🪵]]
```ad-hint
title: 取り組み：主要な結果達成のための行動
collapse: close
- 取り組みとは、主要な結果を実現するために取るべき具体的な行動。これらは基本的にプロジェクト、または大きめのタスク
- 効果的な取り組みは、SMARTを意識：
    - Specific  （明確性）   ：範囲が明確に定義されていること
    - Measurable（測定可能性）：定量的な指標を用いて進捗を追跡できること
    - Achievable（達成可能性）：与えられたリソースと期間内で現実的に達成可能であること
    - Relevant  （関連性）   ：関連する主要な結果に直接貢献すること
    - Time-bound（期限）    ：開始日と終了日、または締め切りが明確に定められていること
```

## 取り組み

- 取り組み 1: <% tp.file.cursor() %>
- 取り組み 2: 
- 取り組み 3: 

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
