---
layout: default
title: "Horizon Summary: 2026-11-22 (EN)"
date: 2026-11-22
lang: en
---

> From 6 items, 2 important content pieces were selected

---

**Technology News**
1. [USB Ethernet through a monitor cut one user’s download speed by 75%](#item-tech-news-1) ⭐️ 7.0/10
2. [Muru: An AI-assisted Rust server project for ASGI and WSGI](#item-tech-news-2) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [USB Ethernet through a monitor cut one user’s download speed by 75%](https://blog.tymscar.com/posts/studiodisplayethernet/) ⭐️ 7.0/10

A blog post reports that download speeds fell by 75% when a laptop’s Ethernet connection ran through a monitor’s USB hub. The author traced the slowdown to added latency and packet drops in that connection and reported that switching Ethernet adapters resolved it. The finding comes from a single setup.

hackernews · soheilpro · Nov 21, 10:36 · [Discussion](https://news.ycombinator.com/item?id=50587875)

**「How the monitor fits into the network path」** When a USB Ethernet adapter is plugged into a monitor’s USB hub, network traffic passes through the hub on its way to the computer. If the adapter’s receive buffer fills before the computer can drain it, packets can be dropped, and TCP retransmissions can reduce download speeds even when the Ethernet link itself is fast.

**「Troubleshooting takeaway」** If downloads slow down through a monitor’s USB hub, testing the same Ethernet adapter directly on the laptop can help isolate the hub’s role before replacing hardware.

**「Community discussion」** One commenter argued that the monitor itself was incidental: the extra latency delayed acknowledgments, allowing the Ethernet adapter’s buffer to fill and drop packets. Another reported a similar slowdown with a MacBook and a Thunderbolt dock and said enabling flow control helped in their setup.

**Tags**: `#USB Ethernet`, `#network throughput`, `#packet loss`, `#hardware troubleshooting`

---

<a id="item-tech-news-2"></a>
### [Muru: An AI-assisted Rust server project for ASGI and WSGI](https://simonwillison.net/2026/Nov/21/muru/) ⭐️ 7.0/10

Graham Dumpleton is developing Muru, an AI-assisted server written in Rust that aims to run both ASGI and WSGI Python web applications in development and production. His public development notes cover how the two interfaces can coexist, as well as worker architecture, local HTTPS, and Kubernetes integration. The write-up provides no benchmarks and does not establish production readiness.

rss · Simon Willison · Nov 21, 23:56

**「Background」** WSGI and ASGI define how Python web applications communicate with servers: WSGI uses a synchronous interface, while ASGI supports asynchronous applications. Dumpleton started mod\_wsgi 20 years earlier and says that experience helps him judge what still needs work in Muru, even when AI does much of the implementation.

**Tags**: `#Python web servers`, `#Rust`, `#ASGI`, `#WSGI`, `#AI-assisted development`

---