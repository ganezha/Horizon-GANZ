---
layout: default
title: "Horizon Summary: 2026-11-24 (EN)"
date: 2026-11-24
lang: en
---

> From 15 items, 6 important content pieces were selected

---

**Technology News**
1. [Nvidia reportedly reinstates Jensen Huang as CEO](#item-tech-news-1) ⭐️ 8.0/10
2. [Ladybird releases its first alpha for macOS and Linux](#item-tech-news-2) ⭐️ 8.0/10
3. [Stalwart positions itself as a drop-in Microsoft Exchange replacement](#item-tech-news-3) ⭐️ 7.0/10
4. [New York Restricts Some Vehicle Subscriptions and Post-Purchase Fees](#item-tech-news-4) ⭐️ 7.0/10
5. [Z.ai releases GLM-5.4, its first looped transformer](#item-tech-news-5) ⭐️ 7.0/10

**Financial News**
1. [Nvidia reinstates Jensen Huang as CEO](#item-finance-news-1) ⭐️ 8.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Nvidia reportedly reinstates Jensen Huang as CEO](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) ⭐️ 8.0/10

Nvidia’s board reportedly reinstated Jensen Huang as CEO. In a statement quoted on Hacker News, the board said it received input from senior U.S. officials before reaching its decision and concluded that Huang’s return posed no national security risk. The available source excerpt does not establish why Huang was removed or what advice the officials gave.

hackernews · jaz · Nov 23, 14:00 · [Discussion](https://news.ycombinator.com/item?id=50611576)

**「Before the reinstatement」** Nvidia’s board said it received input from senior U.S. officials before making its decision. NBC News reported that President Donald Trump called the board and argued that the U.S. economy needed Huang.

**「Board independence」** One commenter singled out the board’s acknowledgment of U.S. government input as the most revealing part of the statement. Another drew a parallel with OpenAI’s 2023 leadership reversal, arguing that a board’s formal authority does not always show who has influence over its decisions.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html">Jensen Huang reinstated as Nvidia CEO. Stock skyrockets 31%</a></li>
<li><a href="https://www.nbcnews.com/tech/tech-news/nvidia-reinstates-jensen-huang-rcna610864">Jensen Huang reinstated as Nvidia CEO after Trump calls board</a></li>

</ul>
</details>

**Tags**: `#Nvidia`, `#AI hardware`, `#corporate governance`, `#U.S. national security`

---

<a id="item-tech-news-2"></a>
### [Ladybird releases its first alpha for macOS and Linux](https://ladybird.org/posts/alpha/) ⭐️ 8.0/10

Ladybird released its first alpha for macOS and Linux, letting users install the independent browser without compiling it from source. In hands-on testing, Simon Willison ran WebAssembly apps including an FFmpeg video compressor and a Pyodide Python REPL, but Datasette Lite failed because the browser does not yet implement \`navigator.serviceWorker.startMessages\(\)\`. The project warns that some sites will not work and the browser may crash.

hackernews · janvdberg · Nov 23, 16:13 · [Discussion](https://news.ycombinator.com/item?id=50614249)

**「An independent browser engine」** Ladybird grew out of SerenityOS and implements its own HTML parsing, CSS, layout, JavaScript, and WebAssembly rather than using an existing browser engine. It still relies on external libraries such as HarfBuzz for text shaping and Skia for 2D graphics.

**「What testers can do」** Testers can report broken sites from inside the browser and review crash reports before deciding whether to send them.

**「Early compatibility reports」** One Hacker News commenter reported that Proxmox’s noVNC interface worked and felt snappier than in Firefox, while another said all the sites they tried rendered correctly but scrolling was slightly jerky. These are individual experiences, not broad compatibility or performance measurements.

**Tags**: `#Ladybird`, `#browser engines`, `#web compatibility`, `#alpha releases`

---

<a id="item-tech-news-3"></a>
### [Stalwart positions itself as a drop-in Microsoft Exchange replacement](https://stalw.art/blog/microsoft-exchange-replacement/) ⭐️ 7.0/10

Stalwart says its self-hosted mail server can now replace Microsoft Exchange without requiring administrators to change their existing setup. The announcement headline describes it as a “drop-in replacement,” but the supplied material does not identify the required Stalwart version, which Outlook clients are supported, or which Exchange features carry over.

hackernews · shaunpud · Nov 23, 22:32 · [Discussion](https://news.ycombinator.com/item?id=50620349)

**「Exchange client compatibility」** Replacing an Exchange server without switching email clients depends on supporting the protocols those clients use, not just providing mailbox access. Stalwart’s announcement identifies MAPI over HTTP, Exchange Web Services \(EWS\), and Exchange ActiveSync among the protocols added in version 1.2.0.

**「What to verify before migrating」** Stalwart lists Microsoft Exchange support, but that does not establish full Outlook compatibility. Before migrating, mail administrators should test their deployed Outlook versions and workflows and, if tamper-resistant retention is required, verify whether their Stalwart plan provides it or a separate archive is needed.

**「Community discussion」** Commenters questioned whether Outlook users could keep the same Exchange workflows, arguing that IMAP access alone does not amount to Exchange integration. Another commenter said Stalwart’s regular plans and open-source editions lack the tamper-resistant archiving they consider necessary for German recordkeeping compliance.

<details><summary>References</summary>
<ul>
<li><a href="https://stalw.art/blog/microsoft-exchange-replacement/">Stalwart is now a drop-in replacement for Microsoft Exchange</a></li>
<li><a href="https://stalw.art/">Stalwart Mail &amp; Collaboration Server</a></li>

</ul>
</details>

**Tags**: `#Stalwart`, `#Microsoft Exchange`, `#Outlook compatibility`, `#self-hosted email`, `#email archiving`

---

<a id="item-tech-news-4"></a>
### [New York Restricts Some Vehicle Subscriptions and Post-Purchase Fees](https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription) ⭐️ 7.0/10

New York Gov. Kathy Hochul signed a law restricting certain vehicle subscriptions and fees charged after purchase. The law is not a blanket ban: reported exemptions include satellite radio, connected services that need a data network to keep working, and software-dependent driver assistance.

hackernews · DeepLogin · Nov 24, 02:27 · [Discussion](https://news.ycombinator.com/item?id=50622774)

**「How vehicle subscriptions work」** Buying a car does not always include ongoing access to every feature: manufacturers or dealers can charge recurring fees after the sale. Those fees can cover access to functions already built into the car or pay for ongoing services such as satellite radio and in-car connectivity.

**「Community discussion」** One commenter cited the Senate bill’s exemptions to argue that SiriusXM and Tesla’s enhanced cruise control appear unaffected. Another questioned whether automakers could use the connected-services exemption to keep charging for features such as heated seats by making them depend on a cellular connection.

<details><summary>References</summary>
<ul>
<li><a href="https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription">Money in Your Pockets: Governor Hochul Signs Bill Restricting ...</a></li>

</ul>
</details>

**Tags**: `#automotive-software`, `#subscription-pricing`, `#connected-vehicles`, `#consumer-protection`

---

<a id="item-tech-news-5"></a>
### [Z.ai releases GLM-5.4, its first looped transformer](https://simonwillison.net/2026/Nov/23/glm-54/) ⭐️ 7.0/10

Z.ai released GLM-5.4, its first looped transformer, for Coding Plan subscribers; it is not currently available through regular API access or as open weights. Simon Willison confirmed that a Coding Plan key works with Z.ai’s existing OpenAI-compatible Responses API. The model repeatedly runs the same group of transformer layers to refine its internal representations, increasing effective depth without adding parameters. Willison’s report does not include coding benchmarks showing whether the change improves performance.

rss · Simon Willison · Nov 23, 23:40

**「How transformer loops work」** A standard transformer runs each layer once per forward pass. A looped transformer feeds the output of a group of layers back through those same layers, adding computation at inference time without adding model parameters.

**「API access」** Developers using Z.ai’s regular API can keep their existing OpenAI-compatible Responses API endpoint to try GLM-5.4, but they currently need a Coding Plan subscription and its API key.

**Tags**: `#GLM-5.4`, `#looped transformers`, `#weight sharing`, `#coding models`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Nvidia reinstates Jensen Huang as CEO](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo-market-rally.html) ⭐️ 8.0/10

U.S. stocks rallied Monday after Nvidia reinstated Jensen Huang as CEO, CNBC reported. The S&amp;P 500 had fallen more than 9% from the Nov. 12 announcement of his departure through Friday’s close.

rss · CNBC Finance · Nov 23, 18:00

**「Background」** The S&amp;P 500 fell more than 9% from Nvidia’s Nov. 12 announcement that Jensen Huang had resigned as CEO through Friday’s close, extending a sell-off that had begun amid concerns about spending on AI data centers.

<details><summary>References</summary>
<ul>
<li><a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/">NVIDIA Corporation - NVIDIA Announces CEO Transition</a></li>

</ul>
</details>

**Tags**: `#Nvidia CEO reinstatement`, `#U.S. equity correction`, `#AI infrastructure spending`, `#Technology sector valuations`

---