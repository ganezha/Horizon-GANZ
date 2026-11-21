---
layout: default
title: "Horizon Summary: 2026-11-21 (EN)"
date: 2026-11-21
lang: en
---

> From 17 items, 7 important content pieces were selected

---

**Technology News**
1. [Inkling 2 Mini is an open-weight model with a looped Transformer](#item-tech-news-1) ⭐️ 8.0/10
2. [Navier–Stokes Singularities and the Generalized Riemann Hypothesis Prompt Lean Debate](#item-tech-news-2) ⭐️ 8.0/10
3. [Alessandro Masullo Claims a Proof of the Generalized Riemann Hypothesis](#item-tech-news-3) ⭐️ 7.0/10
4. [Nasdaq loses 2026 gains as AI sell-off weighs on Anthropic](#item-tech-news-4) ⭐️ 7.0/10
5. [ArXiv Paper Reports Gradient-Free Self-Editing of Language Model Weights](#item-tech-news-5) ⭐️ 7.0/10
6. [Levent Alpöge claims proof of the Generalized Riemann Hypothesis](#item-tech-news-6) ⭐️ 7.0/10

**Financial News**
1. [U.S. companies issue more shares than they buy back](#item-finance-news-1) ⭐️ 8.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Inkling 2 Mini is an open-weight model with a looped Transformer](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Thinking Machines’ Inkling 2 Mini is described as an open-weight language model that uses a looped Transformer, reusing part of the network across multiple passes. Early users report running it locally on AMD Ryzen and Apple Silicon, but those tests do not establish how it compares with other models across workloads.

hackernews · jasondavies · Nov 20, 20:12 · [Discussion](https://news.ycombinator.com/item?id=50581260)

**「How a looped Transformer works」** A standard Transformer runs each layer once per token, while a looped Transformer reuses some layers before producing the next token. Inkling 2 Mini runs its middle layers three times per token, doing more computation without adding a separate set of weights for each pass.

**「Early local tests」** One commenter reported decoding at 27 tokens per second on a Ryzen 395 using llama.cpp with Vulkan; another reported about 10 tokens per second with a Q4 XL build on a 32 GB M1 Pro MacBook. The Mac tester said the model handled a simple Python CSV task but failed to identify a coin, highlighting how much results varied by task in that limited test.

<details><summary>References</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>

</ul>
</details>

**Tags**: `#open-weight models`, `#looped transformers`, `#local inference`, `#llama.cpp`

---

<a id="item-tech-news-2"></a>
### [Navier–Stokes Singularities and the Generalized Riemann Hypothesis Prompt Lean Debate](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 8.0/10

A post on unforced Euler and Navier–Stokes singularities and the Generalized Riemann Hypothesis prompted a Hacker News discussion about AI-assisted proofs checked in Lean. The post itself was not included in the supplied material, so it is unclear which results, if any, were proved or what statements Lean checked.

hackernews · archon1410 · Nov 20, 17:21 · [Discussion](https://news.ycombinator.com/item?id=50578358)

**「What Lean verifies」** Lean’s kernel checks that a proof establishes the exact formal statement provided, given the axioms it uses. Agreement between independent kernels reduces concern about a checker bug, but it does not establish that the formal statement captures the intended conjecture; that requires a separate review of the definitions and assumptions.

**「What Lean verification establishes」** Before treating a successful Lean check as evidence that a conjecture has been proved, reviewers should compare the formal statement and its assumptions with the original conjecture. Even agreement between independent kernels checks the proof of the statement as written, not whether that statement captures the intended mathematical claim.

**「What Lean can verify」** One commenter reported that two independent Lean kernels appeared to accept a proof, arguing that this made a kernel bug less likely. Another raised a separate question: even if both kernels accept the proof, does the formal statement actually match the intended conjecture?

**Tags**: `#AI-assisted theorem proving`, `#Lean`, `#Navier–Stokes singularities`, `#Generalized Riemann Hypothesis`

---

<a id="item-tech-news-3"></a>
### [Alessandro Masullo Claims a Proof of the Generalized Riemann Hypothesis](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) ⭐️ 7.0/10

Alessandro Masullo announced a claimed proof of the Generalized Riemann Hypothesis, a major open problem in number theory. The item also links to a separate proof claim by Levent Alpöge, but provides neither Masullo’s proof nor expert verification of it.

hackernews · jasondavies · Nov 20, 18:33 · [Discussion](https://news.ycombinator.com/item?id=50579568)

**「What the hypothesis says」** The Generalized Riemann Hypothesis extends the Riemann Hypothesis from the zeta function to Dirichlet L-functions, predicting that all their nontrivial zeros have real part 1/2. A proof would give sharper bounds on how primes are distributed in arithmetic progressions, such as the numbers that leave a remainder of 1 when divided by 4.

**「What verification would change」** If either claimed proof is verified, results that rely on the Generalized Riemann Hypothesis, such as certain explicit bounds on the number of primes in arithmetic progressions, would no longer depend on that assumption. The announcement itself does not change their conditional status.

**「Community Discussion」** One commenter described Masullo’s draft as 940 pages long and noted that its first numbered subsection appeared empty. Other commenters speculated about a connection to an Anthropic announcement, but the discussion did not establish any role for AI in Masullo’s work.

<details><summary>References</summary>
<ul>
<li><a href="https://ui.adsabs.harvard.edu/abs/2020arXiv200301925E/abstract">Explicit bound for the number of primes in arithmetic ...</a></li>

</ul>
</details>

**Tags**: `#Generalized Riemann Hypothesis`, `#Analytic Number Theory`, `#Proof Verification`

---

<a id="item-tech-news-4"></a>
### [Nasdaq loses 2026 gains as AI sell-off weighs on Anthropic](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) ⭐️ 7.0/10

An AI stock sell-off wiped out the Nasdaq’s gains for 2026 and weighed on Anthropic shares in their second day of trading after the company’s IPO, The Guardian reported. The available account does not establish what triggered the sell-off.

hackernews · cdrnsf · Nov 20, 13:29 · [Discussion](https://news.ycombinator.com/item?id=50574383)

**「Background」** Anthropic had just gone public, and Yahoo Finance reported that investors had viewed its IPO as a test of demand for AI stocks. The IPO price is the price set for the offering; once public trading begins, the share price can move independently of it.

**「Reader discussion」** One Hacker News commenter asked whether cheaper AI automation could initially reduce an industry’s contribution to GDP even as it lowers costs. Another questioned whether the sell-off might weaken investor appetite for a potential OpenAI IPO.

<details><summary>References</summary>
<ul>
<li><a href="https://finance.yahoo.com/markets/live/stock-market-today-friday-november-19-dow-sp-500-nasdaq-anthropic-nvidia-141644188.html">Stock market today: Dow and S&amp;P 500 enter correction, Nasdaq sinks...</a></li>

</ul>
</details>

**Tags**: `#Anthropic IPO`, `#Nasdaq`, `#AI stock valuations`, `#automation economics`

---

<a id="item-tech-news-5"></a>
### [ArXiv Paper Reports Gradient-Free Self-Editing of Language Model Weights](https://arxiv.org/abs/2611.21885) ⭐️ 7.0/10

An arXiv paper reports that a language model edited its own weights without using gradients, keeping edits that improved its accuracy on practice problems. The discussion describes an accuracy gain from shorter reasoning traces that stayed within the token limit; the available account does not establish that the edits improved the model’s reasoning more broadly.

hackernews · lwhsiao · Nov 20, 16:29 · [Discussion](https://news.ycombinator.com/item?id=50577265)

**「Weight edits versus prompting」** A model’s weights are numerical parameters that shape its outputs. Unlike a prompt, which changes the input without changing those parameters, a weight edit persists across later requests. The paper describes its method as gradient-free: it tests candidate edits on practice problems and keeps those that work rather than using gradients to determine how to update the weights.

**「Implications for evaluation」** The reported accuracy gain does not establish that the model reasons better: a commenter pointed to the paper’s appendix for evidence that the edit addressed failures caused by exceeding the token limit. To distinguish better reasoning from fewer cutoffs, evaluators should report cutoff rates alongside accuracy and check whether the gain persists with a larger token budget.

**「Community Discussion」** One commenter argued that the edits improved the score only by preventing answers from being cut off. Another questioned the paper’s reported “no training” claim, arguing that testing candidate edits on practice problems and keeping those that work can count as training even without gradient descent.

<details><summary>References</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50577265">Language Models Can Rewrite Their Own Weights | Hacker News</a></li>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Language Models Can Rewrite Their Own Weights</a></li>
<li><a href="https://news.ycombinator.com/item?id=50577265">Language Models Can Rewrite Their Own Weights | Hacker News</a></li>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Language Models Can Rewrite Their Own Weights</a></li>

</ul>
</details>

**Tags**: `#language models`, `#weight editing`, `#gradient-free optimization`, `#reasoning token budgets`

---

<a id="item-tech-news-6"></a>
### [Levent Alpöge claims proof of the Generalized Riemann Hypothesis](https://alpo.ge/remark.pdf) ⭐️ 7.0/10

In a short announcement, Levent Alpöge says he and Claude found a proof of the Riemann Hypothesis and extended the method to the Generalized Riemann Hypothesis. He says they formalized the arguments without assumptions, but the supplied material does not establish that the proof has been independently verified. He expects the method could also resolve the Extended Riemann Hypothesis, which he does not claim to have proved.

hackernews · iamronaldo · Nov 20, 14:16 · [Discussion](https://news.ycombinator.com/item?id=50574968)

**「The conjecture and its verification」** The Riemann Hypothesis says that all nontrivial zeros of the Riemann zeta function lie on the line with real part 1/2; the Generalized Riemann Hypothesis extends that claim to Dirichlet L-functions. A Lean formalization lets a proof checker verify the precise statement encoded in the code, but reviewers still need to confirm that the statement matches the intended conjecture and that the proof introduces no unproved assumptions.

**「Community discussion」** A Hacker News commenter reported that the purported Lean formalization was 1.3 GB and about 15 million lines of code. The comment described the archive’s size, not whether Lean successfully checked the claimed proof.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/CocoSgt/riemann-hypothesis-lean">CocoSgt/ riemann - hypothesis - lean : Mirror of Levent Alpöge &#x27;s Lean ...</a></li>

</ul>
</details>

**Tags**: `#Generalized Riemann Hypothesis`, `#Number theory`, `#Lean theorem prover`, `#AI-assisted mathematics`

---

## Financial News

<a id="item-finance-news-1"></a>
### [U.S. companies issue more shares than they buy back](https://www.cnbc.com/2026/11/20/equity-issuance-bull-market-problem.html) ⭐️ 8.0/10

U.S. companies shifted from buying back more shares than they issued in 2024 to issuing more than they bought back in 2026, according to Acadian Asset Management. As of mid-November 2026, Acadian measured net issuance at 3.1% of the U.S. stock market’s total value, below the peaks of the tech and pandemic-era bubbles.

rss · CNBC Finance · Nov 20, 14:15

**「Background」** Buybacks reduce the number of shares investors can trade, while net issuance increases that supply.

**Tags**: `#U.S. equity issuance`, `#share buybacks`, `#AI financing`, `#initial public offerings`

---