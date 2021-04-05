import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Store/UserSlice';


function AddUser() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [PicSrc, setPicSrc] = useState('');

  const mySubmitHandler = (event) => {
     event.preventDefault();
    event.target.children.userName.value = '';
     event.target.children.url.value = '';    
    dispatch(addUser({ id: nanoid(), user: userName, userPic: PicSrc }));
    alert('User Adedd Successfully')
  };

  return (
    <div className="main-Section">
     
      <p>please enter user Name</p>
      <form onSubmit={mySubmitHandler}>
       <input value={userName} name="userName" onChange={(e) => setUserName(e.target.value)} placeholder='Enter User Name'/>
      <input type='url' name="url" value={PicSrc} onChange={(e) => setPicSrc(e.target.value)} placeholder='Enter Link to Profile Pic'/>

      <button>OK</button>
      </form>
      
     
    </div>
  );
}

export default AddUser;
