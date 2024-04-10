import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import { ThemeProvider } from "./context/theme/ThemeProvider";
import { PrimeReactProvider } from "primereact/api";


import "primeicons/primeicons.css";
import "./index.css";

import "../src/styles/primereact/filters.css"
import "../src/styles/primereact/buttons.css"
import "../src/styles/primereact/inputs.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
