'use client'
import React, { useState } from 'react'
import { addItem } from '../redux/toDoSlice';
import { useDispatch, useSelector } from 'react-redux';

function page() {
    const [todo, setTodo] = useState("");
    const toDos= useSelector((state)=> state.toDoData.toDo) ||[];
    console.log("toDos", toDos);
    const dispatch = useDispatch()
    const handleToDoAdd = () => {
        dispatch(addItem(todo));
    }

  return (
    <div>
        <h3>Add To Do List</h3>
      <input type = "text" placeholder = "Add new task" onChange = {(e)=> setTodo(e.target.value)}/>
      <button onClick={handleToDoAdd}> Add To Do</button>
      {toDos.map((item, index)=> {
        console.log("hello");
        return <span key = {`${item }-${index}`}>{item}<br/></span>
      })}
    </div>
  )
}

export default page
