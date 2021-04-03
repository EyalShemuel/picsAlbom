import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './UsersSlice';
import { nanoid } from '@reduxjs/toolkit';

function AddUser() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  dispatch(addUser({ id: nanoid(), user: text, userPic: text }));

  return (
    <div className="add-user">
        <h1>Register section</h1>
      <p>please enter user Name</p>
      <input value={userName} onChange={(e)=> setUserName(e.target.value)}/>
    
    </div>
  );
}

export default AddUser;
