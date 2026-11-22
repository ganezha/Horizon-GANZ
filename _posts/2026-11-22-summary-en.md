---
layout: default
title: "Horizon Summary: 2026-11-22 (EN)"
date: 2026-11-22
lang: en
---

> From 7 items, 3 important content pieces were selected

---

**Technology News**
1. [Lean and the Riemann Hypothesis: What Was Verified?](#item-tech-news-1) ⭐️ 8.0/10
2. [Swapping a USB Ethernet adapter fixed a 75% download slowdown](#item-tech-news-2) ⭐️ 7.0/10
3. [Muru targets ASGI and WSGI with a Rust server](#item-tech-news-3) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Lean and the Riemann Hypothesis: What Was Verified?](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 8.0/10

A Lean community blog post titled “Lean verification of the Riemann Hypothesis” prompted discussion about what had been formalized and how the result was checked. The post’s text is not available in the supplied material, and the title and comments alone do not establish which theorem was checked or whether Lean verified a proof.

hackernews · g-b-r · Nov 21, 14:36 · [Discussion](https://news.ycombinator.com/item?id=50589618)

**「What Lean checks」** A Lean proof checker verifies a proof against a precise formal statement, so checking the proof and confirming that the statement expresses the intended conjecture are separate tasks. The Lean community blog notes that experts in Lean and number theory had already vetted Mathlib’s formal statement, \`RiemannHypothesis\`.

**「Community discussion」** One commenter argued that agreement among separately implemented Lean proof checkers would make a checker bug less likely; another questioned how independent those implementations really are, citing a reported case in which one accepted a bogus refutation of the Collatz conjecture. Commenters also debated how much credit to give Claude versus the human expert who guided the work.

<details><summary>References</summary>
<ul>
<li><a href="https://leanprover-community.github.io/blog/posts/riemann-hypothesis/">Lean verification of the Riemann Hypothesis | Lean community blog</a></li>

</ul>
</details>

**Tags**: `#Lean`, `#formal verification`, `#Riemann Hypothesis`, `#proof-checker kernels`, `#AI-assisted mathematics`

---

<a id="item-tech-news-2"></a>
### [Swapping a USB Ethernet adapter fixed a 75% download slowdown](https://blog.tymscar.com/posts/studiodisplayethernet/) ⭐️ 7.0/10

A blog post reports that download speeds fell by 75% when the author’s USB Ethernet adapter was connected through a monitor’s USB hub. Switching to a different adapter reportedly fixed the slowdown, but the account does not establish that the monitor has a widespread defect.

hackernews · soheilpro · Nov 21, 10:36 · [Discussion](https://news.ycombinator.com/item?id=50587875)

**「How USB hubs can affect Ethernet」** When an Ethernet adapter is plugged into the Studio Display XDR’s USB hub, incoming packets pass through the hub on their way to the computer. The adapter buffers those packets while waiting for the host to read them; if the buffer fills, it can drop incoming packets and reduce download throughput.

**「What to test」** If downloads slow down through a monitor’s USB hub, try the same adapter directly in the computer, then try a different adapter through the hub to help isolate the cause.

**「Community discussion」** One commenter explained the slowdown as a chain reaction: extra latency through the hub delayed acknowledgments, the adapter’s buffer filled, and packets were dropped. Another reported a similar problem with a MacBook and a Thunderbolt dock and said enabling flow control helped.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.tymscar.com/posts/studiodisplayethernet/">My Monitor Was Cutting My Download Speed by 75%</a></li>

</ul>
</details>

**Tags**: `#USB hubs`, `#Ethernet adapters`, `#network throughput`, `#hardware debugging`

---

<a id="item-tech-news-3"></a>
### [Muru targets ASGI and WSGI with a Rust server](https://simonwillison.net/2026/Nov/21/muru/) ⭐️ 7.0/10

Graham Dumpleton is developing Muru, an AI-assisted Rust server designed to run both ASGI and WSGI Python web applications in development and production. His public development series covers topics including worker architecture, local HTTPS, canary deployments, and Kubernetes integration. Simon Willison’s write-up describes the project’s goals but does not establish production readiness or provide benchmarks against other servers.

rss · Simon Willison · Nov 21, 23:56

**「Background」** WSGI is the traditional synchronous interface between Python web applications and servers, while ASGI also accommodates asynchronous applications. Dumpleton started mod\_wsgi about 20 years earlier to serve WSGI applications through Apache.

**Tags**: `#Python web servers`, `#Rust`, `#ASGI`, `#WSGI`

---