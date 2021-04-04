import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './UsersSlice';
import { nanoid } from '@reduxjs/toolkit';

function AddUser() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [PicSrc, setPicSrc] = useState('');

  const submit = () => {
    dispatch(addUser({ id: nanoid(), user: userName, userPic: PicSrc }));
  };

  return (
    <div className="add-user">
      <h1>Register section</h1>
      <p>please enter user Name</p>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter User Name'/>
      <input type='url' value={PicSrc} onChange={(e) => setPicSrc(e.target.value)} placeholder='Enter Link to Profile Pic'/>

      <button onClick={submit}>OK</button>
    </div>
  );
}

export default AddUser;
