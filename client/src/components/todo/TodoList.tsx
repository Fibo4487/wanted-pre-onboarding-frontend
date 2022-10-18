import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";

const TodoList = () => {
  return (
    <Container>
      <TodoInput />
      {/* <TodoItem /> */}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 1px solid black;
  width: 800px;
  min-height: 500px;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: none;
`;
