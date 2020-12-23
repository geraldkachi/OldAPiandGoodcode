import React from "react";
import Todos from "./Todos";
import AddTodos from "./AddTodos";

const TodoApp = () => {
  const [todos, setTodo] = React.useState([
    { id: 1, content: "buy some milk" },
    { id: 2, content: "play kachi songs" },
  ]);

  const deleteTodo = (id) => {
    // console.log(id);
    const todolist = todos.filter(todo => {
        return todo.id !== id
    })
    setTodo(todolist)  
  };

  return (
    <div className="w-100 text-center mt-4 list-group-item">
      <h1>Todos List</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodos />
    </div>
  );
};

export default TodoApp;
