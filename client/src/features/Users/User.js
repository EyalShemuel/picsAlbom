import React from "react";
import Image from "../basics/Image";

const User = ({ userName, userPic }) => {
  return (
     
    <div style={{border: '1px solid black' , margin:'0.2%' ,  padding:'1%', width:'20%' }}>
      <Image src={userPic} size="M" />

      <p>{userName}</p>
    </div>
  );
};

export default User;
