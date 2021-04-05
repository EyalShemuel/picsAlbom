import React from "react";
import Image from "../basics/Image";
import { BrowserRouter as Router, Switch, Route, Link,useParams } from 'react-router-dom';

const User = ({ id, userName, userPic }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "0.2%",
        padding: "1%",
        width: "20%",
        cursor: "pointer",
      }}
    >
      <Link to={'/Album/userID:'+id}>
        <Image src={userPic} size="M" />
        <p>{userName}</p>
      </Link>
    </div>
  );
};

export default User;
