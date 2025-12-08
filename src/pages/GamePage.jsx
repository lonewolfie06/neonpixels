import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getGameById } from "../data/games.js";
import { GameFrame } from "../components/GameFrame.jsx";

// Game player page: focuses on a single game with a playable frame placeholder
const GamePage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = getGameById(gameId);

  if (!game) {
    return (
      <div className="np-page np-page-game">
        <header className="np-page-header">
          <h1 className="np-page-title">Cabinet not found</h1>
          <p className="np-page-sub">
            This slot isn&apos;t wired up yet. Head back to the main floor and
            pick another game.
          </p>
          <button
            type="button"
            className="np-ghost-button"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </header>
      </div>
    );
  }

  return (
    <div className="np-page np-page-game">
      <header className="np-page-header np-page-header-tight">
        <div className="np-breadcrumb">
          <Link to="/" className="np-breadcrumb-link">
            Arcade floor
          </Link>
          <span className="np-breadcrumb-sep">/</span>
          <span className="np-breadcrumb-current">{game.title}</span>
        </div>
        <h1 className="np-page-title">{game.title}</h1>
        <p className="np-page-sub">{game.description}</p>
        <div className="np-game-detail-meta">
          <span className="np-game-chip np-game-chip-primary">
            {game.primaryCategory}
          </span>
          <span className="np-game-chip np-game-chip-muted">
            Difficulty: {game.difficulty}
          </span>
        </div>
      </header>

      <GameFrame game={game} />

      <section className="np-game-detail-panel">
        <div className="np-game-detail-column">
          <h2 className="np-section-title">How to play</h2>
          <p className="np-game-detail-text">{game.controls}</p>
        </div>
        <div className="np-game-detail-column">
          <h2 className="np-section-title">Tech notes</h2>
          <p className="np-game-detail-text">
            This page is built to host any embeddable web game: HTML5 canvas,
            WebGL, or even Java applets running through modern wrappers. Wire
            your loader into the game frame above without changing the layout.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GamePage;


