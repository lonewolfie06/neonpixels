import React from "react";
import { ALL_CATEGORIES, games } from "../data/games.js";

// Categories page: simple overview of available tags and example games
const CategoriesPage = () => {
  return (
    <div className="np-page np-page-categories">
      <header className="np-page-header">
        <h1 className="np-page-title">Browse by channel</h1>
        <p className="np-page-sub">
          Every channel is a different flavor of arcade energy. When you add
          real games, wire them up to these categories for instant discovery.
        </p>
      </header>

      <section className="np-category-grid">
        {ALL_CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
          const sample = games.filter((g) => g.categories.includes(cat.id));
          return (
            <article className="np-category-card" key={cat.id}>
              <h2 className="np-category-card-title">{cat.label}</h2>
              <p className="np-category-card-copy">
                {cat.id === "arcade" &&
                  "Quick-play, score-chasing classics that load fast and hit hard."}
                {cat.id === "action" &&
                  "Twitchy, moment-to-moment decisions where timing is everything."}
                {cat.id === "puzzle" &&
                  "Turn-based and real-time brain teasers with clean interfaces."}
                {cat.id === "retro" &&
                  "Pixel edges, CRT vibes, and throwback mechanics with modern polish."}
                {cat.id === "sports" &&
                  "Compact takes on stadium favorites with snappy controls."}
                {cat.id === "skill" &&
                  "Precision, mastery and high scores built for repetition."}
              </p>
              <div className="np-category-card-footer">
                {sample.length > 0 ? (
                  <span className="np-category-chip">
                    Example: {sample[0].title}
                  </span>
                ) : (
                  <span className="np-category-chip np-category-chip-empty">
                    Waiting for its first game
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default CategoriesPage;


