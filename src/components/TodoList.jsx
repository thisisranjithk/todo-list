import React from 'react'
import Todo from './Todo'

function TodoList({todoData, handleDelete , editItem}) {
    if(!todoData || todoData.length === 0){
        return <p className='no-todo'>No Todo Yet...</p>
    }
  return (
    <ul className='todo-list'>
      {todoData.map((todo) => {
           return <Todo key={todo.id} todo={todo} handleDelete={handleDelete}  editItem={editItem}/>
      })}
    </ul>
  )
}

export default TodoList