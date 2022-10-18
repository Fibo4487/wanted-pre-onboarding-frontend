import React from "react";
import Header from "../components/base/Header";
import TodoLayout from "../components/todo/TodoLayout";
import TodoList from "../components/todo/TodoList";

const Todo = () => {
  return (
    <>
      <Header />
      <TodoLayout>
        <TodoList />
      </TodoLayout>
    </>
  );
};

export default Todo;
