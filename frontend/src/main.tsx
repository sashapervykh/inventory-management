import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/lib/i18n/i18n.ts";
import { App } from "./app/App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
