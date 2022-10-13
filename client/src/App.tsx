import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
