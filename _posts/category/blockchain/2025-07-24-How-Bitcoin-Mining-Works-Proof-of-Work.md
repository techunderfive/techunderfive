---
layout: post
title: "How Bitcoin Mining Works: How New Coins Are Made & Secured | Blockchain"
description: "Discover the inner workings of Bitcoin mining, including nonce hashing, block verification, and Proof-of-Work explained simply. Perfect for beginners curious about how blockchain really works."
date: 2025-07-12
excerpt: Understand Bitcoin mining step by step — from transaction to block addition — using a real-world style example. This post explains Proof-of-Work, nonce puzzles, and blockchain security for crypto beginners..
category: Blockchain
tags: [Bitcoin,Blockchain,Proof of Work,Bitcoin Mining,Crypto Explained,Cryptocurrency Basics,How Bitcoin Works,Blockchain Consensus,SHA256,Mining Explained,Crypto Mining Tutorial,Bitcoin for Beginners,Decentralized Ledger,Mining Rewards,Hash Puzzle,Nonce in Bitcoin,Mempool,Alice and Bob Bitcoin,How Crypto Mining Works,Crypto Education]
image: /assets/images/bitcoin-mining-explained-thumbnail.jpg
canonical_url: https://techunderfive.com/blockchain/2025/07/24/How-Bitcoin-Mining-Works-Proof-of-Work.html
author: TechUnder5
---
<!-- Structured Data for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Bitcoin Mining Works: How New Coins Are Made & Secured | Blockchain",
  "description": "Discover the inner workings of Bitcoin mining, including nonce hashing, block verification, and Proof-of-Work explained simply. Perfect for beginners curious about how blockchain really works.",
  "image": "/assets/images/bitcoin-mining-explained-thumbnail.jpg",
  "author": {
    "@type": "Person",
    "name": "TechUnder5"
  },
  "datePublished": "2025-07-24",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://techunderfive.com/blockchain/2025/07/24/How-Bitcoin-Mining-Works-Proof-of-Work.html"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TechUnder5",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techunderfive.com/assets/images/logonobg.png"
    }
  }
}
</script>

**Welcome to TechUnder5 — where tech meets simplicity in just under 5 minutes!**  
Today, we’ll break down one of the most fascinating parts of cryptocurrency: **How Bitcoin mining works**. From verifying transactions to solving complex puzzles, we’ll cover it all in a clear, visual journey — featuring Alice and Bob.

---

<div style="text-align: left; margin-bottom: 20px;">
  <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/jYaO46xJdWA"
          title="How Bitcoin Mining Works: How New Coins Are Made & Secured " 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "VideoObject",
  "name": "How Bitcoin Mining Works: How New Coins Are Made & Secured | Blockchain",
  "description": "Discover the inner workings of Bitcoin mining, including nonce hashing, block verification, and Proof-of-Work explained simply. Perfect for beginners curious about how blockchain really works.",
  "thumbnailUrl": "https://img.youtube.com/vi/jYaO46xJdWA/hqdefault.jpg",
  "uploadDate": "2025-07-22",
  "duration": "PT5M0S",
  "contentUrl": "https://www.youtube.com/watch?v=jYaO46xJdWA",
  "embedUrl": "https://www.youtube.com/embed/jYaO46xJdWA"
}
</script>

## Table of Contents

1. [What is the Consensus Mechanism in Bitcoin?](#what-is-the-consensus-mechanism-in-bitcoin)  
2. [Alice Sends 1 Bitcoin to Bob – Step-by-Step](#alice-sends-1-bitcoin-to-bob--step-by-step)  
3. [Why the “Puzzle”? – Proof-of-Work](#why-the-puzzle--proof-of-work)  
4. [Who Sets the Puzzle — and Why It’s Fair](#who-sets-the-puzzle--and-why-its-fair)  
5. [What’s Inside a Bitcoin Block Header?](#whats-inside-a-bitcoin-block-header)  
6. [Why Bitcoin Is Secure](#why-bitcoin-is-secure)  
7. [Conclusion](#conclusion)

## What is the Consensus Mechanism in Bitcoin?

<div style="text-align: left; margin-bottom: 10px;">
  <img src="/assets/images/consensus-mechanism-Yell.png" 
       alt="Consensus Mechanism" 
       style="max-width: 350px; height: auto; border-radius: 6px;">
</div>


The **consensus mechanism** is the rulebook that ensures **everyone in the Bitcoin network agrees on a single version of truth** — like which transactions are valid and in what order they happened.

Bitcoin uses a type of consensus called **Proof of Work (PoW)**. Here's how it works in simple terms:

### Imagine a Giant Shared Ledger
Everyone (called **nodes**) keeps a copy of Bitcoin’s ledger — a record of all transactions.

But what if two people try to add conflicting records at the same time?  
Who decides which one is true?

That’s where consensus comes in.

### Proof of Work: Let the Computers Decide
In Proof of Work, miners compete to solve a **math puzzle**.  
The **first** one to solve it gets to propose the next valid block of transactions.

Once a miner solves the puzzle and shares the block:
- Other nodes **verify** that the solution is correct.
- If valid, everyone **agrees** to add that block to their copy of the ledger.

This shared agreement is called **reaching consensus**.

---

### Why This System Works:
- **No Trust Needed**: Nodes don’t have to trust each other — just the math and the rules.
- **Tamper-Resistant**: Changing any transaction would require redoing the work for every block after it — nearly impossible.
- **Fairness**: Anyone with computing power can join and try to mine.

---

## Alice Sends 1 Bitcoin to Bob – Step-by-Step

Let’s walk through a simple transaction example:

1. **Alice wants to send 1 Bitcoin to Bob.** She creates a transaction with Bob’s wallet address and broadcasts it to the Bitcoin network.
2. **Transaction Pool (Mempool):** Her transaction joins a waiting area called the *mempool*, along with others.
3. **Block Proposal:** Miners (nodes) gather several transactions (including Alice’s) into a *candidate block*.
4. **Nonce and Hashing:** Miners add a random number (called a *nonce*) to the block and hash the data repeatedly.
5. **Solving the Puzzle:** The first miner to find a hash that matches the network’s difficulty level announces it to the network.
6. **Verification:** Other nodes verify the miner’s solution and confirm the validity of all transactions in the block.
7. **Adding the Block:** Once approved, the block is permanently added to the blockchain.
8. **Bob Receives Bitcoin:** The transaction is now recorded, and Bob sees 1 Bitcoin in his wallet.
9. **The first miner to solve the puzzle** earns a reward in the form of a bitcoin for solving the puzzle and adding it to the blockchain. 

<div style="text-align: left; margin-bottom: 10px;">
  <img src="/assets/images/Blocksolved.png" 
       alt="Blockchain Puzzle Solved" 
       style="max-width: 350px; height: auto; border-radius: 6px;">
</div>

---

## Why the “Puzzle”? – Proof-of-Work

The *puzzle* that miners solve isn’t just for fun — it’s the heart of Bitcoin’s **Proof-of-Work** consensus system. It's objective is to decide which transactions are added to the blockchain — *without trusting a central authority*.

### Puzzle Mechanics:
- Miners collect valid transactions from the mempool.
- They tweak a **32-bit nonce** inside the block header.
- They hash the header until the result is **below a network-wide target** (usually starts with many zeroes).

### Why This Matters:
- **Sybil Resistance:** To flood the network with fake blocks, a hacker would need over **50% of global computing power** — nearly impossible.
- **Fair Competition:** Anyone can mine. But the more computational power you have, the better your chances — just like a lottery with more tickets.

---

## Who Sets the Puzzle — and Why It’s Fair

The puzzle’s difficulty is set by **Bitcoin’s protocol**. It adjusts automatically to keep block times around 10 minutes.  
Miners don’t coordinate — they simply *guess* over and over, changing the nonce until the correct hash is found.

> It’s like a global lottery: more powerful miners have better odds, but even small players can occasionally win.

---

## What’s Inside a Bitcoin Block Header?

Every time a miner guesses a solution, they’re hashing just the **80-byte block header**, which includes:

<div style="text-align: left; margin-bottom: 10px;">
  <img src="/assets/images/block-header.png" 
       alt="Blockchain Header" 
       style="max-width: 350px; height: auto; border-radius: 6px;">
</div>


---

## Why Bitcoin Is Secure

Bitcoin’s security comes from how blocks are chained together. Each block includes:
- A **nonce**
- The **transaction data**
- A **reference (hash)** to the previous block

This structure, secured by the **SHA256 algorithm**, means that if someone tries to tamper with one block, they’d have to re-solve all the puzzles for every following block — a near-impossible task given the massive computing power required.

**Bottom line:**  
Altering a single block breaks the entire chain — making Bitcoin **virtually tamper-proof**.

---

## Conclusion

That’s Bitcoin mining in a nutshell — simplified and visualized with Alice and Bob!  

If you found this explanation helpful **Subscribe** to *TechUnder5* for < 5 mins explainers.

Thanks for reading — **TechUnder5: Making complex tech simple.**
