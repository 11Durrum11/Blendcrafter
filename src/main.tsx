import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { installTouchTooltips } from "./lib/touch-tooltips";

// Touch press-and-hold hover-help (2026-11-18): titled controls show
// their title in a bubble on a ~550ms hold, without firing.
installTouchTooltips();

// Dark slate + parchment/amber is the default theme (see README); the header
// toggle in the builder flips the `dark` class on <html>.
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
