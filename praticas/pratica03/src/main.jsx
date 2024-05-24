import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./contexts/ContatosContex.jsx";
import { ContatosContextProvider } from "./contexts/ContatosContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContatosContextProvider>
      <App />
    </ContatosContextProvider>
  </React.StrictMode>
);
