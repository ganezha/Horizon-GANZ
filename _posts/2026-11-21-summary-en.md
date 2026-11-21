---
layout: default
title: "Horizon Summary: 2026-11-21 (EN)"
date: 2026-11-21
lang: en
---

> From 17 items, 7 important content pieces were selected

---

**Technology News**
1. [Navier–Stokes blow-up claim draws questions about external forcing](#item-tech-news-1) ⭐️ 8.0/10
2. [Inkling 2 Mini brings a looped transformer to local inference](#item-tech-news-2) ⭐️ 8.0/10
3. [Hacker News Discusses Lean Checks for Navier–Stokes and Riemann Claims](#item-tech-news-3) ⭐️ 8.0/10
4. [Levent Alpöge claims a proof of the Generalized Riemann Hypothesis](#item-tech-news-4) ⭐️ 8.0/10
5. [Preprint Reports a Language Model Editing Its Own Weights Without Gradients](#item-tech-news-5) ⭐️ 7.0/10
6. [Signal raises concerns about mobile AI agents accessing private chats](#item-tech-news-6) ⭐️ 7.0/10

**Financial News**
1. [U.S. companies issue more shares than they buy back](#item-finance-news-1) ⭐️ 8.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Navier–Stokes blow-up claim draws questions about external forcing](https://github.com/tristanbuckmaster/navier-stokes/) ⭐️ 8.0/10

A GitHub repository titled “Finite-time blow-up for the Navier–Stokes equations” was shared on Hacker News. Finite-time blow-up means an initially smooth solution becomes singular in a finite time. The supplied material does not establish whether the claimed result applies without external forcing, whether its assumptions match those of the Millennium Prize problem, or whether the proof has been verified.

hackernews · trotro · Nov 20, 15:34 · [Discussion](https://news.ycombinator.com/item?id=50576232)

**「What finite-time blow-up means」** Finite-time blow-up means a solution becomes singular in finite time rather than staying smooth. Forced equations include an external driving term; the unforced case of the three-dimensional Navier–Stokes Millennium Prize problem asks whether smooth, divergence-free initial data satisfying the problem’s conditions can lead to such a singularity without external forcing. The repository listing identifies a paper and a Lean package, but does not say whether the theorem meets those conditions.

**「What readers asked」** One commenter described the result as unforced, contrasting it with an earlier example that used a designed external force. Another asked whether a numerical simulation could show the solution approaching a singularity.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/tristanbuckmaster/navier-stokes/">GitHub - tristanbuckmaster/navier-stokes · GitHub</a></li>

</ul>
</details>

**Tags**: `#Navier–Stokes equations`, `#finite-time blow-up`, `#partial differential equations`, `#computational fluid dynamics`

---

<a id="item-tech-news-2"></a>
### [Inkling 2 Mini brings a looped transformer to local inference](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Inkling 2 Mini is described in the Hacker News discussion as an open-weight looped transformer sized for local use. A looped transformer reuses the same layers across multiple passes; a commenter cited benchmarks that put the model near Qwen3.8-27B, but the available material does not establish the test conditions or whether that comparison holds in everyday use.

hackernews · jasondavies · Nov 20, 20:12 · [Discussion](https://news.ycombinator.com/item?id=50581260)

**「How looped transformers work」** A looped transformer runs the same block of layers multiple times, adding computation without storing a separate set of weights for each pass. Thinking Machines Lab also highlights NVFP4, a 4-bit numeric format that helps reduce the memory needed to store model weights for local inference.

**「Local deployment」** Users can follow Unsloth’s guide to try Inkling 2 Mini locally on Macs or systems with NVIDIA or AMD hardware. Teams considering it as a replacement for Qwen 3.8-27B should test their own multi-turn and constraint-heavy prompts: Thinking Machines Lab reports that Inkling scored lower on both MultiChallenge and ComplexConstraints v1.1.

**「Community discussion」** One commenter reported decoding at 27 tokens per second on a Ryzen 395 with llama.cpp and Vulkan, and pointed to unmerged pull requests and a patch, so the result is not a stock-build baseline. Another reported about 10 tokens per second with the Q4 XL quantization on a 32 GB M1 Pro MacBook while other apps were running.

<details><summary>References</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://unsloth.ai/docs/models/inkling-2-mini">Inkling 2 Mini - Run Locally Guide | Unsloth Documentation</a></li>

</ul>
</details>

**Tags**: `#looped transformers`, `#open-weight models`, `#local inference`, `#llama.cpp`

---

<a id="item-tech-news-3"></a>
### [Hacker News Discusses Lean Checks for Navier–Stokes and Riemann Claims](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 8.0/10

A Hacker News thread discusses a Terence Tao post on unforced Navier–Stokes singularities and the Generalized Riemann Hypothesis, including reports of proof checks in Lean. The post itself is not included in the available material, and the excerpts do not establish which precise statements were checked or whether either open problem was resolved.

hackernews · archon1410 · Nov 20, 17:21 · [Discussion](https://news.ycombinator.com/item?id=50578358)

**「What Lean checks」** The three-dimensional Navier–Stokes regularity problem asks whether a smooth incompressible flow can develop a singularity in finite time even without external forcing. A Lean kernel checks that a formal proof establishes its stated theorem from its declared assumptions; determining whether that theorem captures the original problem is a separate step.

**「What readers debated」** One commenter reported that two independent Lean kernels accepted a result and argued that this made reliance on a kernel bug less likely. Another, citing Tao’s reference to the Langlands program and arithmetic geometry, asked whether AI can create new mathematical abstractions as well as use existing ones to generate proofs.

<details><summary>References</summary>
<ul>
<li><a href="https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/">Unforced Euler singularity, unforced Navier - Stokes singularity, and the...</a></li>

</ul>
</details>

**Tags**: `#formal verification`, `#Lean`, `#AI-assisted mathematics`, `#Navier–Stokes equations`, `#Generalized Riemann Hypothesis`

---

<a id="item-tech-news-4"></a>
### [Levent Alpöge claims a proof of the Generalized Riemann Hypothesis](https://alpo.ge/remark.pdf) ⭐️ 8.0/10

Levent Alpöge announced in a PDF that he believes he and Anthropic’s Claude proved the Riemann Hypothesis and that their method also proves the Generalized Riemann Hypothesis. He says they formalized the arguments without assumptions, but the supplied material does not independently establish that the proof is correct. Alpöge expects the method could also resolve the Extended Riemann Hypothesis, but does not claim to have proved it.

hackernews · iamronaldo · Nov 20, 14:16 · [Discussion](https://news.ycombinator.com/item?id=50574968)

**「What the hypothesis says」** The Riemann Hypothesis says that every nontrivial zero of the Riemann zeta function has real part 1/2. In the version at issue here, the Generalized Riemann Hypothesis makes the same claim for all Dirichlet L-functions. Lean can check that a formal proof establishes the theorem as written, but determining whether that formal statement captures the intended mathematical claim is a separate step.

**「Verification discussion」** One Hacker News commenter reported that the unpacked Lean files occupied 1.3 GB and contained roughly 15 million lines of code. Another cited checks attributed to MIT mathematician Andrew Sutherland as evidence of correctness, though the quoted status said some checks were still in progress.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Artin_L-function">Artin L - function - Wikipedia</a></li>
<li><a href="https://github.com/CocoSgt/riemann-hypothesis-lean">GitHub - CocoSgt/ riemann - hypothesis -lean: Mirror of Levent...</a></li>
<li><a href="https://math.mit.edu/~drew/grh/">RH Lean proof: verification files - MIT Mathematics</a></li>

</ul>
</details>

**Tags**: `#Generalized Riemann Hypothesis`, `#Lean`, `#formal verification`, `#number theory`

---

<a id="item-tech-news-5"></a>
### [Preprint Reports a Language Model Editing Its Own Weights Without Gradients](https://arxiv.org/abs/2611.21885) ⭐️ 7.0/10

An arXiv preprint reportedly describes a language model that proposes edits to its own weights, tests them on practice problems, and keeps only those that improve accuracy, without using gradient updates. The reported gain appears to come from shortening reasoning traces so the model stays within its token limit. The paper’s methods and results are not included in the supplied material, so the size of the gain and whether it extends beyond that constraint remain unverified.

hackernews · lwhsiao · Nov 20, 16:29 · [Discussion](https://news.ycombinator.com/item?id=50577265)

**「Weight edits vs. inference-time changes」** A model’s weights are the numerical parameters learned during training. Prompts and extra reasoning tokens can change how a model answers without changing those parameters; editing the weights can change how it behaves on later requests. The preprint uses “self-rewriting” to distinguish model-directed weight edits from conventional training that updates weights using gradients.

**「Community discussion」** One Hacker News commenter questioned the phrase “no training,” arguing that selecting edits based on practice problems still resembles training even without gradient descent. Another compared the token-budget fix with a prior weight-space programming experiment and questioned whether it showed a broader improvement in reasoning.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Language Models Can Rewrite Their Own Weights</a></li>

</ul>
</details>

**Tags**: `#large language models`, `#weight-space editing`, `#gradient-free optimization`, `#reasoning token budgets`

---

<a id="item-tech-news-6"></a>
### [Signal raises concerns about mobile AI agents accessing private chats](https://signal.org/blog/protecting-your-privacy/) ⭐️ 7.0/10

A Signal blog post prompted discussion about limiting mobile AI agents’ access to private chats. The concern extends to both ends of a conversation: an agent on a chat partner’s device could access messages even if the sender does not use one. The available material does not establish what protections Signal introduced or how effective they are.

hackernews · dotcoma · Nov 20, 09:42 · [Discussion](https://news.ycombinator.com/item?id=50572348)

**「Background」** End-to-end encryption protects Signal messages in transit, but it does not stop software on either participant’s phone from capturing messages once they’re displayed. That’s why an AI agent with screen access on a chat partner’s phone can pose a privacy risk even if you don’t use one yourself.

**「Community discussion」** One commenter argued that blocking screenshots within individual apps is not a durable substitute for giving users more control over their operating systems. Another reported a usability cost on Windows: they could no longer take screenshots of Signal chats.

<details><summary>References</summary>
<ul>
<li><a href="https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app">Signal is blocking Gemini and Siri AI from reading your... | The Verge</a></li>

</ul>
</details>

**Tags**: `#Signal`, `#mobile AI agents`, `#operating system security`, `#messaging privacy`

---

## Financial News

<a id="item-finance-news-1"></a>
### [U.S. companies issue more shares than they buy back](https://www.cnbc.com/2026/11/20/equity-issuance-bull-market-problem.html) ⭐️ 8.0/10

U.S. companies have shifted from buying back more shares than they issued in 2024 to issuing more than they buy back, according to Acadian Asset Management, which reported that net issuance equaled 3.1% of the U.S. stock market’s total value as of mid-November 2026.

rss · CNBC Finance · Nov 20, 14:15

**「Background」** Buybacks reduce the number of shares investors can trade, while new issuance increases it.

**Tags**: `#U.S. equities`, `#equity issuance`, `#share buybacks`, `#IPOs`

---