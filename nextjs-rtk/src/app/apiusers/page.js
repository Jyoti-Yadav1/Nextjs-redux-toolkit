'use client';
import React,{ useEffect, useState }  from 'react';
import { fetchUsers } from '../redux/apiUsersSlice';
import { useDispatch, useSelector } from 'react-redux';

function page() {
//    const [apiUsers, setApiUsers]  = useState([]);
   const dispatch = useDispatch();
   const apiUsers = useSelector(state => state.apiUsersData.userApiData || []);
    useEffect(()=> {
       let res = dispatch(fetchUsers());
       console.log("res", res);
    //    setApiUsers(res);
    },[]);

  return (
    <div>
      <h1>Api Users List Page</h1>
      <ul>
      {apiUsers.map(item=> {
        return <li>{item.name}</li>
      })}
      </ul>
    </div>
  )
}

export default page
