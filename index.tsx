import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { theme } from "./theme";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </ThemeProvider>
);
