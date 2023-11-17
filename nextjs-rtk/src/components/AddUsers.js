'use client'
import { addUser } from '@/app/redux/slice';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function AddUsers() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const handleAddUserClick = () =>{
     // dispatch action
     dispatch(addUser(name));
    }
  return (
    <div className='add-user'>
      <h3>Add User</h3>
      <input type = "text"
           placeholder = "Add new user"
           onChange ={(e)=>setName(e.target.value)}
           value={name}
           />
      <button onClick ={handleAddUserClick}>Add User</button>
      <Link href = "/removeUser">Remove User</Link><br/>
      <Link href = "/apiusers">Go to API users page </Link>
    </div>
  )
}

export default AddUsers
