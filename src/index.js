import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./store";

function Index() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
