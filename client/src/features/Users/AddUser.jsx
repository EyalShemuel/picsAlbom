import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Store/UserSlice';
import Users from './Users';

function AddUser() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [PicSrc, setPicSrc] = useState('');

  const submit = () => {
    dispatch(addUser({ id: nanoid(), user: userName, userPic: PicSrc }));
  };

  return (
    <div className="main-Section">
     
      <p>please enter user Name</p>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter User Name'/>
      <input type='url' value={PicSrc} onChange={(e) => setPicSrc(e.target.value)} placeholder='Enter Link to Profile Pic'/>

      <button onClick={submit}>OK</button>
      <Users />
    </div>
  );
}

export default AddUser;
