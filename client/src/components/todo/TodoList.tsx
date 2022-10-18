import React from "react";
import styled from "styled-components";

const TodoList = () => {
  return (
    <Container>
      <h1>TodoList</h1>
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
`;
