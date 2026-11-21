---
layout: default
title: "Horizon Summary: 2026-11-21 (EN)"
date: 2026-11-21
lang: en
---

> From 17 items, 7 important content pieces were selected

---

**Technology News**
1. [Inkling 2 Mini brings an open-weight looped transformer to local inference](#item-tech-news-1) ⭐️ 8.0/10
2. [GitHub Repository Claims Finite-Time Blow-Up for Navier–Stokes](#item-tech-news-2) ⭐️ 8.0/10
3. [Levent Alpöge claims a proof of the Generalized Riemann Hypothesis](#item-tech-news-3) ⭐️ 8.0/10
4. [Alessandro Masullo Claims Proof of the Generalized Riemann Hypothesis](#item-tech-news-4) ⭐️ 7.0/10
5. [Signal Discussion Highlights AI Capture Risks on Both Ends of a Chat](#item-tech-news-5) ⭐️ 7.0/10
6. [ArXiv Paper Reports Language Model Editing Its Own Weights Without Gradients](#item-tech-news-6) ⭐️ 7.0/10

**Financial News**
1. [U.S. companies shift from share buybacks to issuing stock](#item-finance-news-1) ⭐️ 8.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Inkling 2 Mini brings an open-weight looped transformer to local inference](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Inkling 2 Mini is an open-weight language model that reuses transformer layers across multiple passes. Hacker News users reported running it locally on AMD Ryzen and Apple M1 Pro hardware, but their early tests do not establish real-world parity with Qwen3.8-27B.

hackernews · jasondavies · Nov 20, 20:12 · [Discussion](https://news.ycombinator.com/item?id=50581260)

**「How the loop works」** A looped transformer reuses the same layers several times when processing each token. Inkling 2 Mini runs its middle layers three times per token; Thinking Machines Lab says this extra computation can help the model reach correct answers with fewer generated tokens.

**「Early local tests」** One commenter reported decoding at 27 tokens per second on a Ryzen 395 with llama.cpp and Vulkan, and pointed to unmerged pull requests and a local performance patch. Another reported about 10 tokens per second on a 32 GB M1 Pro MacBook using Q4 XL quantization: the model handled a Python CSV-sorting task but failed to identify a coin.

<details><summary>References</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>

</ul>
</details>

**Tags**: `#looped transformers`, `#open-weight models`, `#local LLM inference`, `#llama.cpp`

---

<a id="item-tech-news-2"></a>
### [GitHub Repository Claims Finite-Time Blow-Up for Navier–Stokes](https://github.com/tristanbuckmaster/navier-stokes/) ⭐️ 8.0/10

A GitHub repository titled “Finite-time blow-up for the Navier–Stokes equations” drew discussion on Hacker News, where commenters described the claimed result as applying to equations with no external forcing. Finite-time blow-up would mean that an initially smooth solution becomes singular after a finite amount of time. The available material does not establish that the proof is valid or that its assumptions match those of the Millennium Prize problem.

hackernews · trotro · Nov 20, 15:34 · [Discussion](https://news.ycombinator.com/item?id=50576232)

**「Blow-up and the role of forcing」** Finite-time blow-up means that a solution starting from smooth fluid flow develops a singularity after a finite time. In the unforced equations, the fluid evolves without an external driving term; whether a blow-up result resolves the Navier–Stokes Millennium Prize problem also depends on the domain and assumptions on the initial flow.

**「What the claim would settle」** If the proof is correct and its initial data and domain meet one of the Clay problem’s unforced alternatives, it would show that smooth solutions to the three-dimensional Navier–Stokes equations can break down in finite time without external forcing. The supplied material does not establish that those conditions are met, so the repository title alone does not show that the Millennium Prize problem has been solved.

**「Community Discussion」** One commenter asked whether a numerical simulation could show the flow approaching the proposed singularity, while another wondered whether a physical experiment could reproduce any of the predicted behavior.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_existence_and_smoothness">Navier – Stokes existence and smoothness - Wikipedia</a></li>
<li><a href="https://navier-stokes.org/navier-stokes-existence-and-smoothness/">Clay Navier - Stokes Problem : Official Statement Explained</a></li>
<li><a href="https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician/">OpenAI fought dirty on career-making math problem ... | TechCrunch</a></li>

</ul>
</details>

**Tags**: `#Navier–Stokes equations`, `#partial differential equations`, `#finite-time singularities`, `#fluid simulation`

---

<a id="item-tech-news-3"></a>
### [Levent Alpöge claims a proof of the Generalized Riemann Hypothesis](https://alpo.ge/remark.pdf) ⭐️ 8.0/10

Levent Alpöge says he and Claude found a proof of the Riemann Hypothesis and extended the method to prove the Generalized Riemann Hypothesis. He says they formalized the arguments without assumptions, but the supplied material does not establish that the proof has been independently verified. Alpöge says he expects the method to reach the Extended Riemann Hypothesis as well, but does not claim to have proved it.

hackernews · iamronaldo · Nov 20, 14:16 · [Discussion](https://news.ycombinator.com/item?id=50574968)

**「What the conjecture says」** The Riemann Hypothesis says that every nontrivial zero of the Riemann zeta function has real part 1/2. The Generalized Riemann Hypothesis makes the same claim for the broader family of Dirichlet L-functions.

**「Size of the Lean files」** A Hacker News commenter reported that the unpacked Lean files occupied 1.3 GB and contained roughly 15 million lines of code.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/pdf/2506.16115">Dirichlet $L$-functions on the critical line and ... - arXiv.org</a></li>

</ul>
</details>

**Tags**: `#Generalized Riemann Hypothesis`, `#Lean`, `#formal verification`, `#number theory`

---

<a id="item-tech-news-4"></a>
### [Alessandro Masullo Claims Proof of the Generalized Riemann Hypothesis](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) ⭐️ 7.0/10

A blog post announces that Alessandro Masullo claims to have proved the Generalized Riemann Hypothesis. The announcement offers no independent verification or substantive assessment of the manuscript, so the conjecture cannot be considered settled on this evidence.

hackernews · jasondavies · Nov 20, 18:33 · [Discussion](https://news.ycombinator.com/item?id=50579568)

**「What the conjecture says」** The Generalized Riemann Hypothesis extends the classical Riemann Hypothesis to Dirichlet L-functions: it predicts that all their nontrivial zeros have real part 1/2. These zeros help govern how primes are distributed in arithmetic progressions, such as the sequences 1, 5, 9, … and 3, 7, 11, …. The announcement says Brian Conrad had reviewed Masullo’s manuscript for months and that his feedback was still being incorporated; it does not report that the proof has been verified.

**「Draft readiness」** A Hacker News commenter described the draft as 940 pages long and noted that its first subsection was empty, raising questions about how ready it was for review. Other commenters speculated about a connection to an Anthropic announcement but provided no evidence of a link.

<details><summary>References</summary>
<ul>
<li><a href="https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/">Hurried Announcement : Alessandro Masullo GRH</a></li>

</ul>
</details>

**Tags**: `#Generalized Riemann Hypothesis`, `#analytic number theory`, `#proof verification`, `#AI-assisted mathematics`

---

<a id="item-tech-news-5"></a>
### [Signal Discussion Highlights AI Capture Risks on Both Ends of a Chat](https://signal.org/blog/protecting-your-privacy/) ⭐️ 7.0/10

A Signal blog post prompted discussion about whether mobile operating systems should limit what on-device AI agents can capture, including private messages displayed on a contact’s phone. The available excerpts do not establish what protections Signal has shipped, which platforms they cover, or how effective they are.

hackernews · dotcoma · Nov 20, 09:42 · [Discussion](https://news.ycombinator.com/item?id=50572348)

**「Where encryption stops」** End-to-end encryption protects Signal messages in transit, but either participant’s device can display the decrypted text. Signal says AI agents built into operating systems can scan what’s on screen, so a conversation could be exposed on a contact’s device even if you don’t use an AI agent yourself.

**「Impact」** Keeping AI tools off your own phone does not address the risk on the other end of the chat: end-to-end encryption protects messages in transit, but it does not stop a tool with screen access from reading a decrypted message displayed on your contact’s device.

**「Community Discussion」** One commenter argued that operating systems should give users more control rather than leaving individual apps to block screenshots. Another reported being unable to take screenshots of Signal chats on Windows and described that as a loss of basic functionality.

<details><summary>References</summary>
<ul>
<li><a href="https://signal.org/blog/protecting-your-privacy/">Signal is Serious About Protecting Your Privacy</a></li>

</ul>
</details>

**Tags**: `#Signal`, `#mobile operating systems`, `#on-device AI`, `#screen capture`, `#messaging privacy`

---

<a id="item-tech-news-6"></a>
### [ArXiv Paper Reports Language Model Editing Its Own Weights Without Gradients](https://arxiv.org/abs/2611.21885) ⭐️ 7.0/10

An arXiv paper reports that a language model improved its accuracy by directly editing its own weights without using gradients. According to a passage quoted in the discussion, the model tested its edits on practice problems and kept only those that worked, with accuracy rising across eight consecutive sessions. The supplied material does not establish whether the gains generalize beyond the reported setup.

hackernews · lwhsiao · Nov 20, 16:29 · [Discussion](https://news.ycombinator.com/item?id=50577265)

**「Weight Editing Versus Training」** Weights are the numerical parameters that govern a language model’s behavior. Instead of using gradients to calculate how to adjust those parameters, a model can propose edits directly and keep the ones that score better on practice problems; that is still optimization, even without gradients. Google’s earlier Sleep framework also updated weights using self-generated practice examples, but it did so in pre-allocated mixture-of-experts memory blocks during an offline learning phase.

**「Check whether token limits explain the gain」** Before treating the reported gain from gradient-free self-editing as better reasoning, evaluators should compare the edited and unedited models with a token budget large enough for both to finish. A Hacker News commenter attributed the gain to shorter reasoning traces that avoided truncation; the supplied evidence does not establish whether the gain persists without that constraint.

**「Community Discussion」** One commenter attributed the entire gain to shorter reasoning traces that stayed within the token limit, rather than better reasoning. Another questioned the paper’s “no training” claim, noting that the model still used performance on practice problems to select edits.

<details><summary>References</summary>
<ul>
<li><a href="https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/">The sleep framework: A new way for LLMs to retain knowledge ...</a></li>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Language Models Can Rewrite Their Own Weights</a></li>

</ul>
</details>

**Tags**: `#language models`, `#weight editing`, `#gradient-free optimization`, `#reasoning token budgets`

---

## Financial News

<a id="item-finance-news-1"></a>
### [U.S. companies shift from share buybacks to issuing stock](https://www.cnbc.com/2026/11/20/equity-issuance-bull-market-problem.html) ⭐️ 8.0/10

U.S. companies are issuing more shares than they buy back, reversing their position in 2024, according to Acadian Asset Management. Acadian’s analysis put net new issuance at 3.1% of the U.S. stock market’s total value as of mid-November 2026.

rss · CNBC Finance · Nov 20, 14:15

**「Background」** Buybacks reduce the number of shares outstanding, while issuing new stock gives investors more shares to absorb.

**Tags**: `#U.S. equities`, `#Equity issuance`, `#Share buybacks`, `#IPO financing`

---