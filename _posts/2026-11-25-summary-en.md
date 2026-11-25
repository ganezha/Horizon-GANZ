---
layout: default
title: "Horizon Summary: 2026-11-25 (EN)"
date: 2026-11-25
lang: en
---

> From 10 items, 7 important content pieces were selected

---

**Technology News**
1. [OpenAI preprint claims the matrix multiplication exponent is exactly 9/4](#item-tech-news-1) ⭐️ 9.0/10
2. [GreyNoise Reports Active Intrusions Targeting Check Point Management Servers](#item-tech-news-2) ⭐️ 8.0/10
3. [Ternary Bonsai 2.5 27B Gets an Early Mac Mini Test](#item-tech-news-3) ⭐️ 8.0/10
4. [OpenAI Reports GPT-6.2 Proposed Minibinder Structures for Five Targets](#item-tech-news-4) ⭐️ 7.0/10
5. [GPT-6.2 Astra Traces an Anonymous 1808 Sketchbook to the Vicomte de Chabot](#item-tech-news-5) ⭐️ 7.0/10

**Financial News**
1. [Jensen Huang returns as Nvidia CEO](#item-finance-news-1) ⭐️ 7.0/10
2. [Utah drops criminal charges against Kalshi and its co-founders](#item-finance-news-2) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [OpenAI preprint claims the matrix multiplication exponent is exactly 9/4](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) ⭐️ 9.0/10

A preprint posted in OpenAI’s GitHub repository claims that the exponent governing the arithmetic cost of multiplying two square matrices is exactly 9/4 \(2.25\). If correct, the result would refute the conjecture that the exponent is 2. The supplied material does not establish whether the proof has been independently verified.

hackernews · E-Reverance · Nov 25, 01:19 · [Discussion](https://news.ycombinator.com/item?id=50637220)

**「The matrix multiplication exponent」** The matrix multiplication exponent is the infimum of the powers α for which two n × n matrices can be multiplied in O\(n^α\) arithmetic operations. The conjecture that the exponent is 2 allows a running time of O\(n^\(2+ε\)\) for every fixed ε &gt; 0; it does not require an exactly quadratic algorithm.

**「A limit on faster algorithms」** If the preprint’s lower bound holds, it would rule out any algorithm in the arithmetic model with a matrix multiplication exponent below 2.25. That would refute the conjecture that the exponent is 2, but it would not show which algorithm is fastest in practice.

**「Community discussion」** Hacker News commenters pointed out that an upper bound of 2.25 alone would still leave room for an exponent of 2. They argued that the key claim is a matching lower bound, which would rule out smaller exponents.

<details><summary>References</summary>
<ul>
<li><a href="https://raw.githubusercontent.com/openai/math/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf">The matrix multiplication exponent is nine fourths</a></li>

</ul>
</details>

**Tags**: `#matrix multiplication`, `#algebraic complexity`, `#computational lower bounds`, `#theoretical computer science`

---

<a id="item-tech-news-2"></a>
### [GreyNoise Reports Active Intrusions Targeting Check Point Management Servers](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) ⭐️ 8.0/10

GreyNoise reports an active intrusion campaign targeting Check Point Security Management Servers. Excerpts quoted in the Hacker News discussion describe an HFS session weakness: HFS used JavaScript’s non-cryptographic Math.random\(\) for session IDs, and the actor reportedly forged a signed administrator cookie. The available material does not establish how the actor initially gained access or how widespread the campaign is.

hackernews · louiereederson · Nov 24, 16:32 · [Discussion](https://news.ycombinator.com/item?id=50630594)

**「Earlier Check Point patch」** Check Point disclosed and patched CVE-2026-16232 in July 2026, according to Cybersecurity Dive. The flaw can grant full administrative access through SmartConsole, but the available evidence does not establish whether it was the initial entry point in this campaign.

**「Open Questions」** One commenter asked whether initial access involved CVE-2026-16232 and whether the targeted Check Point servers were internet-facing; neither point is confirmed in the supplied material. Another questioned whether JavaScript should make Math.random\(\) safer by default rather than leaving each application to choose a cryptographically secure alternative.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cybersecuritydive.com/news/ai-enabled-campaign-targets-check-point-security-management-servers/875622/">AI-enabled campaign targets Check Point Security Management ...</a></li>

</ul>
</details>

**Tags**: `#Check Point`, `#intrusion campaigns`, `#HFS`, `#session security`, `#pseudorandom number generators`

---

<a id="item-tech-news-3"></a>
### [Ternary Bonsai 2.5 27B Gets an Early Mac Mini Test](https://prismml.com/news/bonsai-2-5-27b) ⭐️ 8.0/10

A Hacker News commenter testing Ternary Bonsai 2.5 27B in Q2 GGUF format reported generation speeds of 22–25 tokens per second on an M5 Pro Mac Mini with 24 GB of RAM, including 22.3 tokens per second on a Python generation prompt. The commenter said a 128K-token context fit in memory but did not report testing coding tasks at that context length. These are user-reported results, not independently verified measurements.

hackernews · b0m · Nov 24, 20:08 · [Discussion](https://news.ycombinator.com/item?id=50633922)

**「Background」** Ternary quantization represents model weights with just three possible values, reducing the memory needed to store them for local inference. Ternary Bonsai 2 is the predecessor; PrismML says version 2.5 completes tasks in fewer turns and uses fewer tokens than version 2.

**「What the coding benchmarks show」** One commenter questioned whether an apparent SWE-bench Verified tie with Claude Opus 4.6 would translate to comparable performance on real coding tasks. In a separate eight-task test devised by another commenter, Bonsai 2.5 and Bonsai 2 each passed five tasks, but 2.5 took 76 minutes versus 107 minutes for its predecessor.

<details><summary>References</summary>
<ul>
<li><a href="https://prismml.com/news/bonsai-2-5-27b">PrismML — Introducing Ternary Bonsai 2 . 5 27 B : Powering Agentic...</a></li>

</ul>
</details>

**Tags**: `#ternary quantization`, `#local LLM inference`, `#Apple Silicon`, `#coding benchmarks`

---

<a id="item-tech-news-4"></a>
### [OpenAI Reports GPT-6.2 Proposed Minibinder Structures for Five Targets](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) ⭐️ 7.0/10

OpenAI says GPT-6.2 wrote code that proposed three-dimensional minibinder structures for five protein targets without using specialized protein models at that stage. Specialized models were still used to generate amino acid sequences and select candidates predicted to fold and bind as intended. The supplied excerpts do not establish that the candidates worked in the lab or that GPT-6.2 outperformed specialized methods.

hackernews · acossta · Nov 24, 21:02 · [Discussion](https://news.ycombinator.com/item?id=50634658)

**「Protein shape and sequence」** A minibinder is a small protein designed to attach to a specific site on another molecule. Proposing its three-dimensional shape is distinct from identifying an amino acid sequence that folds into that shape, and a computational prediction of binding does not establish that binding occurs in the lab.

**「Community discussion」** Commenters debated what should count as protein design: one questioned how much credit GPT-6.2 deserved when another model supplied the sequences, while another saw value in using a general-purpose model to connect specialized tools without concluding that it had surpassed them.

**Tags**: `#protein design`, `#GPT-6.2`, `#AI code generation`, `#computational biology`

---

<a id="item-tech-news-5"></a>
### [GPT-6.2 Astra Traces an Anonymous 1808 Sketchbook to the Vicomte de Chabot](https://simonwillison.net/2026/Nov/24/astra-historical-mystery/) ⭐️ 7.0/10

Historian Mark Humphries reports that GPT-6.2 Astra identified the vicomte de Chabot as the likely creator of an anonymous 1808 sketchbook held at Yale’s Beinecke Library in 22 minutes with minimal prompting. The model found a diary entry placing Chabot nearby five days before a date recorded in the sketchbook, then predicted that his travel journal, available by request from Cleveland State University, would confirm the attribution. Humphries says a later examination of the journal supported the attribution; the account describes one case, not a measure of how reliably the model can repeat the result.

rss · Simon Willison · Nov 24, 16:53

**「The archival trail」** Yale’s Beinecke Library has digitized the anonymous 1808 sketchbook, but the vicomte de Chabot’s travel journal is available only by request from Cleveland State University. A separate diary places Chabot near a river mentioned in the sketchbook five days before its dated entry, giving researchers a lead to check against his journal.

**Tags**: `#GPT-6.2 Astra`, `#AI research agents`, `#archival research`, `#historical attribution`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Jensen Huang returns as Nvidia CEO](https://www.cnbc.com/2026/11/25/jensen-huang-nvidia-ai-talent-race.html) ⭐️ 7.0/10

CNBC reports that Jensen Huang returned as Nvidia CEO on Nov. 23 after resigning on Nov. 12. His return drew attention to competition for AI engineers and researchers: China has overtaken the U.S. in its share of the global AI talent pool, according to Carnegie Endowment research.

rss · CNBC Finance · Nov 25, 01:13

**「Background」** Huang resigned on Nov. 12, and Nvidia named finance chief Colette Kress interim CEO.

<details><summary>References</summary>
<ul>
<li><a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/">NVIDIA Corporation - NVIDIA Announces CEO Transition</a></li>

</ul>
</details>

**Tags**: `#Nvidia`, `#CEO transitions`, `#U.S.–China AI competition`, `#AI talent markets`

---

<a id="item-finance-news-2"></a>
### [Utah drops criminal charges against Kalshi and its co-founders](https://www.cnbc.com/2026/11/24/utah-drops-charges-against-kalshi-after-it-halted-operations-in-state.html) ⭐️ 7.0/10

Utah dismissed all 14 criminal charges against Kalshi and its two co-founders after the company suspended operations in the state. The Utah attorney general’s office said prosecutors could refile the charges if Kalshi resumes operations there.

rss · CNBC Finance · Nov 24, 20:45

**「Background」** A day before Utah filed charges alleging Kalshi ran an illegal gambling operation, the federal Commodity Futures Trading Commission sued Utah, arguing that only the federal government can regulate markets where users trade on event outcomes.

**「Impact」** Users in Utah can no longer place trades on Kalshi while the suspension is in effect.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cftc.gov/PressRoom/PressReleases/9315-26">CFTC Sues to Block State Enforcement in Utah Amid Ongoing ...</a></li>
<li><a href="https://finance.yahoo.com/markets/options/articles/utah-went-kalshi-now-federal-133717455.html?fr=sycsrp_catchall">Utah Went After Kalshi — Now Federal Regulators Are Taking ...</a></li>

</ul>
</details>

**Tags**: `#Kalshi`, `#Prediction markets`, `#Utah gambling enforcement`, `#CFTC jurisdiction`

---