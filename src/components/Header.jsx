import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar.jsx";

// Header with logo, navigation, and optional search
export const Header = React.memo(() => {
  const location = useLocation();
  const showSearch = location.pathname === "/";

  return (
    <header className="np-header">
      <div className="np-header-left">
        <NavLink to="/" className="np-logo">
          <span className="np-logo-orb" />
          <span className="np-logo-text">
            Neon<span>Pixel</span> Arcade
          </span>
        </NavLink>
      </div>

      <nav className="np-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "np-nav-link" + (isActive ? " np-nav-link-active" : "")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            "np-nav-link" + (isActive ? " np-nav-link-active" : "")
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            "np-nav-link" + (isActive ? " np-nav-link-active" : "")
          }
        >
          About
        </NavLink>
      </nav>

      {showSearch && (
        <div className="np-header-right">
          <SearchBar />
        </div>
      )}
    </header>
  );
});


