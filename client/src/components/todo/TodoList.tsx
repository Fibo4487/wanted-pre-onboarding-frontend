import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import { Todo, TodoApi } from "../../api/TodoApi";
import TodoCards from "./TodoCards";

const TodoList = () => {
  const [todos, setTodos] = React.useState<Todo[] | null>(null);

  React.useEffect(() => {
    const fetchTodos = async () => {
      const todos = await TodoApi.getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  return (
    <Container>
      <TodoInput setTodos={setTodos} />
      {todos && <TodoCards todos={todos} setTodos={setTodos} />}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 1px solid black;
  width: 800px;
  min-height: 500px;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: none;
`;
