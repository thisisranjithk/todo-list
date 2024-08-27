import "./App.css";
import Header from "./components/Header";
import TodoData from "./data/TodoData";
import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [todoData, setTodoData] = useState(TodoData);
  const [editTodo, seteditTodo] = useState({});

  const deleteTodo = (id) => {
    setTodoData(todoData.filter((todo) => todo.id !== id));
    toast.error("Deleted...", {
      duration: 1000
    });
  };

  const updateDeleteTodo = (id) => {
    setTodoData(todoData.filter((todo) => todo.id !== id));
    toast.success("Updated...");
  };

  const addTodo = (newTodo) => {
    if (!newTodo || newTodo.item === "" || newTodo.item.trim() === "") {
      toast.error("Please add Todo...", {
        duration: 1000
      });
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
      <Form addTodo={addTodo} editTodo={editTodo} handleUpdateDelete={updateDeleteTodo} />
      <TodoList
        todoData={todoData}
        handleDelete={deleteTodo}
        editItem={editItem}
      />
      <Toaster />
    </>
  );
}

export default App;
