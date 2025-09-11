---
layout: default
title: About
permalink: /about/
---

<div class="about-content">
  <h1>About TechUnder5</h1>
  
  <!-- YouTube Channel Link -->
  <div class="youtube-section">
    <div style="text-align: center; margin-bottom: 2rem;">
      <a class="site-logo" href="https://www.youtube.com/@techunder5" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
        <img src="/assets/images/logonobg.png" alt="TechUnder5 Logo" style="height: 100px; display: block; margin: 0 auto;">
      </a>
      <div style="margin-top: 0.5rem; font-size: 1.1rem; color: var(--color-text);">
        <strong>Watch us on YouTube</strong>
      </div>
      <p style="margin-top: 0.5rem; font-size: 1rem; color: var(--color-text-muted);">
        Subscribe to our YouTube channel for video explanations and tutorials
      </p>
    </div>
  </div>
  
  <p class="about-intro">
    Having worked across multiple Tech companies including at FAANG, I've learned firsthand that it's not knowledge, but clarity, that drives real understanding. Whether you're curious about how something works or trying to level up your tech skills, I'm here to make things make sense — one concept at a time.
  </p>

  <div class="about-mission">
    <h2>Our Mission</h2>
    <p>
      TechUnder5 is dedicated to breaking down complex technology concepts into clear, digestible explanations that anyone can understand. We believe that technology should be accessible to everyone, regardless of their background or experience level.
    </p>
  </div>

  <div class="about-approach">
    <h2>Our Approach</h2>
    <p>
      We focus on three core principles:
    </p>
    <ul>
      <li><strong>Clarity over complexity</strong> - We prioritize clear explanations over technical jargon</li>
      <li><strong>Practical examples</strong> - Every concept is illustrated with real-world applications</li>
      <li><strong>Progressive learning</strong> - We build knowledge step by step, from basics to advanced topics</li>
    </ul>
  </div>

  <div class="about-topics">
    <h2>What We Cover</h2>
    <p>
      Our content spans across three main technology domains:
    </p>
    <div class="topic-grid">
      <div class="topic-card">
        <h3>Blockchain & Web3</h3>
        <p>From Bitcoin basics to DeFi protocols, smart contracts, and the future of decentralized technology.</p>
      </div>
      <div class="topic-card">
        <h3>Cloud Computing</h3>
        <p>Understanding cloud platforms, services, and how modern applications are built and deployed.</p>
      </div>
      <div class="topic-card">
        <h3>Quantum Computing</h3>
        <p>Exploring the revolutionary world of quantum mechanics and its applications in computing.</p>
      </div>
    </div>
  </div>

  <!-- Contact Thumbnail Section -->
  <div class="contact-section">
    <h2>Get in Touch</h2>
    <p>Have questions, suggestions, or want to collaborate? We'd love to hear from you!</p>
    
    <div class="contact-thumbnail">
      <a href="/contact/contact.html" class="contact-card">
        <div class="thumbnail-container">
          <img src="/assets/images/contact-thumbnail.svg" alt="Contact us - Phone and Email" loading="lazy">
        </div>
        <h3>Contact Us</h3>
        <p>Send us a message, ask questions, or share your thoughts. We're here to help!</p>
      </a>
    </div>
  </div>
</div>

<style>
  .about-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .about-intro {
    font-size: 1.2rem;
    line-height: 1.7;
    color: var(--color-text);
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--color-surface);
    border-radius: 12px;
    border-left: 4px solid var(--color-primary);
  }

  .about-mission,
  .about-approach,
  .about-topics {
    margin-bottom: 3rem;
  }

  .about-mission h2,
  .about-approach h2,
  .about-topics h2 {
    color: var(--color-text);
    margin-bottom: 1rem;
  }

  .about-mission p,
  .about-approach p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-text-muted);
  }

  .about-approach ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
  }

  .about-approach li {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-text-muted);
  }

  .topic-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .topic-card {
    background: var(--color-surface);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--color-border);
    transition: all 0.2s ease;
  }

  .topic-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .topic-card h3 {
    color: var(--color-primary);
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
  }

  .topic-card p {
    color: var(--color-text-muted);
    line-height: 1.5;
  }

  .contact-section {
    margin-top: 3rem;
    padding: 2rem;
    background: var(--color-surface);
    border-radius: 12px;
    text-align: center;
  }

  .contact-section h2 {
    margin-bottom: 1rem;
  }

  .contact-section p {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    margin-bottom: 2rem;
  }

  .contact-thumbnail {
    max-width: 400px;
    margin: 0 auto;
  }

  .contact-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: var(--color-bg);
    border-radius: 12px;
    padding: 1rem;
    border: 1px solid var(--color-border);
    transition: all 0.2s ease;
  }

  .contact-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .contact-card h3 {
    color: var(--color-primary);
    margin: 1rem 0 0.5rem 0;
    font-size: 1.3rem;
  }

  .contact-card p {
    color: var(--color-text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .about-content {
      padding: 0 0.5rem;
    }

    .about-intro {
      font-size: 1.1rem;
      padding: 1rem;
    }

    .topic-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .contact-section {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .about-intro {
      font-size: 1rem;
    }

    .about-mission p,
    .about-approach p,
    .about-approach li {
      font-size: 1rem;
    }

    .contact-section {
      padding: 1rem;
    }
  }
</style>
