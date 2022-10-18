import React from "react";
import { Todo } from "../../api/TodoApi";

interface TodoCardsProps {
  todos: Todo[];
}

const TodoCards = ({ todos }: TodoCardsProps) => {
  return <div>TodoCards</div>;
};

export default TodoCards;
