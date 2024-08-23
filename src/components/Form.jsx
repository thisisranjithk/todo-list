import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";

function Form({ addTodo, editTodo, handleDelete }) {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [inputBtn, setInputBtn] = useState("Add")

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (Object.entries(editTodo).length>0) {
      setText(editTodo.item);
      setIsEditing(true)
      setInputBtn("Update");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      item: text,
    };

    if(isEditing){
      if(text==="" || text.trim() === ""){
        alert("Update not Found");
        setIsEditing(false);
        setInputBtn("Add");
      }
      else{
        handleDelete(editTodo.id);
        addTodo(newTodo);
        setIsEditing(false)
        setInputBtn("Add");
      }
      }
      else{
        addTodo(newTodo);
      }
    setText("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="form-input"
          type="text"
          placeholder="Enter Todo"
          value={text}
        ></input>
        <button className={isEditing? "input-btn input-update-btn" : "input-btn input-add-btn"}>
          {isEditing? <FaEdit /> :<IoMdAdd />} {inputBtn}
        </button>
      </form>
    </div>
  );
}

export default Form;
