import React, { createContext, useContext, useState, useMemo } from "react";

// Simple global context for search and category filters
const ArcadeContext = createContext(null);

export const ArcadeProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      activeCategory,
      setActiveCategory
    }),
    [searchTerm, activeCategory]
  );

  return (
    <ArcadeContext.Provider value={value}>{children}</ArcadeContext.Provider>
  );
};

export const useArcade = () => {
  const ctx = useContext(ArcadeContext);
  if (!ctx) {
    throw new Error("useArcade must be used within an ArcadeProvider");
  }
  return ctx;
};


