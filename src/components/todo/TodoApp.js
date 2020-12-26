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

  const addTodo = (todo) => {
    todo.id = Math.random()
    let todosAd = [...todos, todo]
    setTodo(todosAd)
  }

  return (
    <div className="w-100 text-center mt-4">
      <h1>Todos List</h1>
      <div className="align-items-stretch">
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodos addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
