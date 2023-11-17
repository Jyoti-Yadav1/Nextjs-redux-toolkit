'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeUserAction } from "../app/redux/slice";

function DisplayUsers() {
    // useSelector hook takes callback function
    const userData = useSelector((state)=> state.userData.users);
    const dispatch = useDispatch();

    const removeUser = (id)=> {
    // remove the user
    dispatch(removeUserAction({id}));
    }
  return (
    <div className='user-list'>
      <h3>Users List</h3>
      {userData.map(user => {
        return <div className='user' key={`${user.name}`}><span>{user.name}</span><span className='cross-button' onClick = {()=>removeUser(user.id)}>X</span></div>
      })
    }
    </div>
  )
}

export default DisplayUsers
