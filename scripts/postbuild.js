const fs = require("fs");
const path = require("path");

// Copy built index.html to 404.html so GitHub Pages SPA routes work.
// This runs after `npm run build`.
const docsDir = path.resolve("docs");
const indexPath = path.join(docsDir, "index.html");
const notFoundPath = path.join(docsDir, "404.html");

if (!fs.existsSync(docsDir)) {
  console.error("docs directory not found; did build run?");
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in docs; did build succeed?");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("Created docs/404.html for GitHub Pages SPA fallback.");


