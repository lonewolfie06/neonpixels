import React from "react";

// Placeholder frame where HTML5 / Java games can be embedded later.
// Uses a 16:9 aspect ratio and keeps styling neutral but retro-inspired.
export const GameFrame = ({ game }) => {
  return (
    <section className="np-game-frame">
      <div className="np-game-frame-inner">
        {/* When you integrate real games, replace this placeholder with an iframe or canvas element. */}
        <div className="np-game-frame-screen">
          <p className="np-game-frame-title">
            {game.title} – cabinet loading soon
          </p>
          <p className="np-game-frame-sub">
            Embed your HTML5 / Java-based build here. This frame is sized and
            styled for that purpose.
          </p>
        </div>
      </div>
    </section>
  );
};


