import React from "react";
import { Link } from "react-router-dom";

// Simple footer with subtle glow and non-infringing copy
export const Footer = React.memo(() => {
  const year = new Date().getFullYear();

  return (
    <footer className="np-footer">
      <div className="np-footer-main">
        <span className="np-footer-brand">NeonPixel Arcade</span>
        <span className="np-footer-dot">•</span>
        <span>All games and assets belong to their respective creators.</span>
      </div>
      <div className="np-footer-links">
        <Link to="/about" className="np-footer-link">
          About
        </Link>
        <a
          href="#top"
          className="np-footer-link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top
        </a>
        <span className="np-footer-year">© {year}</span>
      </div>
    </footer>
  );
});


