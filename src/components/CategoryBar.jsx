import React from "react";
import { useArcade } from "../context/ArcadeContext.jsx";
import { ALL_CATEGORIES } from "../data/games.js";

// Horizontal pill-style category selector
export const CategoryBar = React.memo(() => {
  const { activeCategory, setActiveCategory } = useArcade();

  return (
    <div className="np-category-bar">
      {ALL_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={
            "np-category-pill" +
            (activeCategory === cat.id ? " np-category-pill-active" : "")
          }
          onClick={() => setActiveCategory(cat.id)}
        >
          <span className="np-category-pill-label">{cat.label}</span>
        </button>
      ))}
    </div>
  );
});


