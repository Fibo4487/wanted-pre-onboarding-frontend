import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import ProtectedRouter from "./ProtectedRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todo"
          element={
            <ProtectedRouter>
              <Todo />
            </ProtectedRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
