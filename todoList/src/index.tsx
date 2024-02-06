import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
