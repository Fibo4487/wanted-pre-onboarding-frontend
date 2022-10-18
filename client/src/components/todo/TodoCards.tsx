import React from "react";
import styled from "styled-components";
import { Todo } from "../../api/TodoApi";
import TodoCard from "./TodoCard";

interface TodoCardsProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

const TodoCards = ({ todos, setTodos }: TodoCardsProps) => {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </Container>
  );
};

export default TodoCards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
