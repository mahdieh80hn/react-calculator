import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { HistoryProvider } from "./context/HistoryContext";
import BMIHistoryProvider from "./context/BMIHistoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <HistoryProvider>
        <BMIHistoryProvider>
          <App />
        </BMIHistoryProvider>
      </HistoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
