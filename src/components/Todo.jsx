import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

function Todo({ todo, handleDelete, editItem }) {
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    // (complete ? setComplete(false) : setComplete(true));
    if(complete) {
      toast.error("revert to not completed");
      setComplete(false)
    }
    else{
      
      toast.success("mark as completed");
      setComplete(true)
    }
  }
 

  return (
    <React.Fragment>
    <li className="todo-item">
      <span className={complete && "complete"}>{todo.item}</span>
      <div>
        <button onClick={() => editItem(todo)} className="edit-icon">
          <FaEdit color="rgb(84, 9, 128)" />
        </button>
        <button onClick={handleComplete} className="done-icon">
          <IoCheckmarkDoneCircle color="rgb(84, 9, 128)" />
        </button>
        <button onClick={() => handleDelete(todo.id)}>
          <MdDelete color="rgb(84, 9, 128)" />
        </button>
      </div>
    </li>
    <Toaster />
    </React.Fragment>
  );
}

export default Todo;
