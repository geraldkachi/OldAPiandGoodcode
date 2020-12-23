import React from "react";
import Todos from "./Todos";

const TodoApp = () => {
  const [todos, setTodo] = React.useState([
    { id: 1, content: "buy some milk" },
    { id: 1, content: "play kachi songs" },
  ]);

  const deleteTodo = (id) => {
    console.log(id);
  };

  return (
    <div className="w-100">
      <h1>Todos List</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
