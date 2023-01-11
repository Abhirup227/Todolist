
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

import axios from "axios"; //to fetch the API 

function App() {
  // setting up state
  const [todos, setTodos] = useState(null);

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    // jsonplaceholder API
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  }, []); //[] only fires one time when the component loads

  return (
    <div>
      {todos ? (
        <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
