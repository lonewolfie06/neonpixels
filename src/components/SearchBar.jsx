import React, { useCallback } from "react";
import { useArcade } from "../context/ArcadeContext.jsx";

// Compact search bar used in the header on desktop and mobile
export const SearchBar = React.memo(() => {
  const { searchTerm, setSearchTerm } = useArcade();

  const handleChange = useCallback(
    (event) => {
      setSearchTerm(event.target.value);
    },
    [setSearchTerm]
  );

  return (
    <label className="np-search">
      <span className="np-search-icon">🔎</span>
      <input
        type="text"
        className="np-search-input"
        placeholder="Search games"
        value={searchTerm}
        onChange={handleChange}
      />
    </label>
  );
});


