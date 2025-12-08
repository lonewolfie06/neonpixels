import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout.jsx";

// Lazy-loaded pages for performance
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage.jsx"));
const GamePage = lazy(() => import("./pages/GamePage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));

// Root application component with routing configuration
const App = () => {
  return (
    <AppLayout>
      {/* Simple suspense fallback - could be improved with a fancier loader later */}
      <Suspense fallback={<div className="np-loader">Loading arcade...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Redirect unknown routes back home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
};

export default App;


