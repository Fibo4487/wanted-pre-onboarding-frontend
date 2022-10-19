import React, { useState } from "react";
import styled from "styled-components";
import { Todo, TodoApi } from "../../api/TodoApi";

interface TodoCardProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

const TodoCard = ({ todo, setTodos }: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.todo);
  const todoID = todo.id;

  const onChangeEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClickComplete = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTodo = await TodoApi.updateTodo(
      todoID,
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

  const handleClickDelete = async () => {
    await TodoApi.deleteTodo(todoID);

    setTodos((prev) => {
      if (prev) {
        return prev.filter((todo) => todo.id !== todoID);
      }
      return [];
    });
  };

  const handleClickEdit = () => {
    setIsEditing(true);
  };

  const handleClickCancel = () => {
    setIsEditing(false);
  };

  const handleClickSave = async () => {
    const updatedTodo = await TodoApi.updateTodo(
      todoID,
      value,
      todo.isCompleted
    );

    setTodos((prev) => {
      if (prev) {
        return prev.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
      }
      return [updatedTodo];
    });

    setIsEditing(false);
  };

  return (
    <Card>
      <TodoCompleteCheckBox
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleClickComplete}
      />
      {isEditing ? (
        <EditTodo value={value} onChange={onChangeEditValue} />
      ) : (
        <TodoContent>
          <h3>{todo.todo}</h3>
        </TodoContent>
      )}
      {isEditing ? (
        <>
          <Button onClick={handleClickSave}>Save</Button>
          <Button onClick={handleClickCancel}>Cancel</Button>
        </>
      ) : (
        <>
          <Button onClick={handleClickEdit}>Edit</Button>
          <Button onClick={handleClickDelete}>Delete</Button>
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
