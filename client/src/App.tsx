import React from "react";
import Router from "./router/Router";
import GlobalStyle from "./styles/Global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
