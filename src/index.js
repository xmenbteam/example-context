import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./Contexts/UserContext/UserProvider";
import { ThemeProvider } from "./Contexts/ThemeContext/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
