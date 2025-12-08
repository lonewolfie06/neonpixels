import React from "react";
import { Link } from "react-router-dom";

// Individual game tile in the home grid
export const GameCard = React.memo(({ game }) => {
  return (
    <article className="np-game-card">
      <Link to={`/game/${game.id}`} className="np-game-card-link">
        <div className="np-game-thumb">
          {/* Pure CSS placeholder "thumbnail" to avoid external assets */}
          <div className="np-game-thumb-inner">
            <span className="np-game-thumb-scanline" />
            <span className="np-game-thumb-label">{game.shortTag}</span>
          </div>
        </div>
        <div className="np-game-meta">
          <h3 className="np-game-title">{game.title}</h3>
          <p className="np-game-tagline">{game.tagline}</p>
          <div className="np-game-meta-row">
            <span className="np-game-chip np-game-chip-primary">
              {game.primaryCategory}
            </span>
            <span className="np-game-chip np-game-chip-muted">
              {game.playHint}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
});


