import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// This is the starting point of every React app.
// 1. We find the <div id="root"></div> from public/index.html
// 2. We tell React to render our <App /> component inside it
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
