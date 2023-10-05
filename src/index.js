import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// get and populate the DOM element, from index.html, with the react app (see app.js)
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
