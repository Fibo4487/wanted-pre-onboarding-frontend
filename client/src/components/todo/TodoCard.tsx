import React, { useState } from "react";

const TodoCard = () => {
  const [todo, setTodo] = useState("");

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleTodo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCard;
