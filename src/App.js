import "./App.css";
import Header from "./components/Header";
import TodoData from "./data/TodoData";
import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [todoData, setTodoData] = useState(TodoData);
  const [editTodo, seteditTodo] = useState({});

  const deleteTodo = (id) => {
    // if (window.confirm("Are you sure want to delete!")) {
    //   setTodoData(todoData.filter((todo) => todo.id !== id));
    // }
    setTodoData(todoData.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    if (!newTodo || newTodo.item === "" || newTodo.item.trim() === "") {
      alert("Please add Todo...");
    } else {
      setTodoData((pre) => [...pre, newTodo]);
    }
  };

  const editItem = (editItem) => {
    seteditTodo(editItem);
  };

  return (
    <>
      <Header title={"Todo List"} />
      <Form addTodo={addTodo} editTodo={editTodo} handleDelete={deleteTodo}/>
      <TodoList
        todoData={todoData}
        handleDelete={deleteTodo}
        editItem={editItem}
      />
    </>
  );
}

export default App;
