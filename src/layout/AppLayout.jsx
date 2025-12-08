import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { ArcadeProvider } from "../context/ArcadeContext.jsx";

// Shared shell layout: neon border, header, main content area, footer
export const AppLayout = ({ children }) => {
  return (
    <ArcadeProvider>
      <div className="np-root">
        <div className="np-shell">
          <Header />
          <main className="np-main">{children}</main>
          <Footer />
        </div>
      </div>
    </ArcadeProvider>
  );
};


