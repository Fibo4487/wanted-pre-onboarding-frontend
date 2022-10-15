import React from "react";
import Router from "./router/Router";
import GlobalStyle from "./styles/Global";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
