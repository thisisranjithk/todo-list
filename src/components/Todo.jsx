import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
function Todo({ todo, handleDelete, editItem }) {
  const [complete, setComplete] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="todo-item">
      <span className={complete ? "complete" : "none"}>{todo.item}</span>
      <div>
        <button onClick={() => editItem(todo)} className="edit-icon">
          <FaEdit color="rgb(84, 9, 128)" />
        </button>
        <button onClick={() => setComplete(true)} className="done-icon">
          <IoCheckmarkDoneCircle color="rgb(84, 9, 128)" />
        </button>
        <button onClick={() => handleDelete(todo.id)}>
          <MdDelete color="rgb(84, 9, 128)" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
