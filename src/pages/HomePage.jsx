import React, { useMemo } from "react";
import { CategoryBar } from "../components/CategoryBar.jsx";
import { GameCard } from "../components/GameCard.jsx";
import { games } from "../data/games.js";
import { useArcade } from "../context/ArcadeContext.jsx";

// Home page: hero banner + grid of game cards with search and category filters
const HomePage = () => {
  const { searchTerm, activeCategory } = useArcade();

  const filteredGames = useMemo(() => {
    const lowered = searchTerm.trim().toLowerCase();
    return games.filter((g) => {
      const matchesCategory =
        activeCategory === "all" || g.categories.includes(activeCategory);
      const matchesSearch =
        !lowered ||
        g.title.toLowerCase().includes(lowered) ||
        g.tagline.toLowerCase().includes(lowered);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="np-page np-page-home">
      <section className="np-hero">
        <div className="np-hero-copy">
          <p className="np-hero-kicker">Original web arcade</p>
          <h1 className="np-hero-title">
            Drop into the{" "}
            <span className="np-hero-title-accent">NeonPixel</span> grid.
          </h1>
          <p className="np-hero-sub">
            Bite-sized, browser-friendly games built for the glow of late
            nights and the click of old-school mice. No launchers, no clutter,
            just pure arcade energy.
          </p>
        </div>
        <div className="np-hero-panel">
          <div className="np-hero-stat">
            <span className="np-hero-stat-label">Launch-ready slots</span>
            <span className="np-hero-stat-value">+{games.length}</span>
          </div>
          <div className="np-hero-stat">
            <span className="np-hero-stat-label">Latency-friendly</span>
            <span className="np-hero-stat-value">Web-first</span>
          </div>
          <div className="np-hero-ribbon">No downloads. Just play.</div>
        </div>
      </section>

      <CategoryBar />

      <section className="np-grid-section">
        <div className="np-grid-header">
          <h2 className="np-section-title">Featured slots</h2>
          <span className="np-section-count">
            {filteredGames.length} game
            {filteredGames.length === 1 ? "" : "s"} in view
          </span>
        </div>
        <div className="np-game-grid">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {filteredGames.length === 0 && (
          <p className="np-empty-state">
            Nothing matches that search yet. Clear filters and try again.
          </p>
        )}
      </section>
    </div>
  );
};

export default HomePage;


