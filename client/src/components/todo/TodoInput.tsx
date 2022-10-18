import React from "react";
import styled from "styled-components";
import { Todo, TodoApi } from "../../api/TodoApi";

interface TodoInputProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

const TodoInput = ({ setTodos }: TodoInputProps) => {
  const [value, setValue] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickAddTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTodo = await TodoApi.createTodo(value);

    setTodos((prev) => {
      if (prev) {
        return [...prev, newTodo];
      }
      return [newTodo];
    });
  };

  return (
    <Container>
      <Input value={value} onChange={onChange} />
      <Button onClick={onClickAddTodo}>Add</Button>
    </Container>
  );
};

export default TodoInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
`;

const Button = styled.button`
  margin-left: 10px;
  width: 50px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  outline: none;
`;
