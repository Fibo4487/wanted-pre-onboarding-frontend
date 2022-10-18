import React, { useState } from "react";
import styled from "styled-components";
import { Todo, TodoApi } from "../../api/TodoApi";

interface TodoCardProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

const TodoCard = ({ todo, setTodos }: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickComplete = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTodo = await TodoApi.updateTodo(
      todo.id,
      todo.todo,
      !todo.isCompleted
    );

    setTodos((prev) => {
      if (prev) {
        return prev.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
      }
      return [updatedTodo];
    });
  };

  return (
    <Card>
      <TodoCompleteCheckBox
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleClickComplete}
      />
      {isEditing ? (
        <EditTodo value={todo.todo} onChange={() => {}} />
      ) : (
        <TodoContent>
          <h3>{todo.todo}</h3>
        </TodoContent>
      )}
      {isEditing ? (
        <>
          <Button onClick={() => setIsEditing(false)}>Save</Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button>Delete</Button>
        </>
      )}
    </Card>
  );
};

export default TodoCard;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  border: 1px solid #999;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: white;
`;

const EditTodo = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  margin-left: 10px;
`;

const TodoContent = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: 10px;

  h3 {
    margin: 0;
    font-size: 16px;
  }
`;

const TodoCompleteCheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  width: 63px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 5px;
  outline: none;
  margin-left: 10px;
`;
