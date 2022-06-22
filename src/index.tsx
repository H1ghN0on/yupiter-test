import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/index.css";
import App from "./App";
import { AdaptiveContextProvider } from "@contexts/AdaptiveContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdaptiveContextProvider>
      <App />
    </AdaptiveContextProvider>
  </React.StrictMode>
);
