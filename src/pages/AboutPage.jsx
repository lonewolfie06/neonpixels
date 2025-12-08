import React from "react";

// About page: explains the product vision without referencing other brands
const AboutPage = () => {
  return (
    <div className="np-page np-page-about">
      <header className="np-page-header">
        <h1 className="np-page-title">Built for the late‑night browser kid</h1>
        <p className="np-page-sub">
          NeonPixel Arcade is designed as a modern home for small, expressive
          web games. No downloads, no launchers — just a clean grid of cabinets
          that feel great to browse on desktop and mobile.
        </p>
      </header>

      <section className="np-about-grid">
        <article className="np-about-card">
          <h2 className="np-section-title">Design language</h2>
          <p>
            The interface leans into pixel-inspired typography, sharp panels and
            neon edge glows, while keeping copy crisp and readable. It&apos;s
            retro in mood, not in usability.
          </p>
        </article>

        <article className="np-about-card">
          <h2 className="np-section-title">For developers</h2>
          <p>
            The game frame is intentionally neutral: you can mount HTML5 canvas,
            WebGL scenes or any embeddable runtime inside a responsive shell.
            The layout and routing are React-based, so adding new slots is just
            data.
          </p>
        </article>

        <article className="np-about-card">
          <h2 className="np-section-title">For players</h2>
          <p>
            Short descriptions, bold tiles and fast navigation aim to get
            players into a game within a couple of clicks. The grid scales down
            cleanly for phones, so the arcade is as comfortable on a couch as
            it is at a desk.
          </p>
        </article>
      </section>
    </div>
  );
};

export default AboutPage;


