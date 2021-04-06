import React from "react";
import Image from "../basics/Image";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link,useParams } from 'react-router-dom';

const User = ({ id, userName, userPic }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
        margin: "0.2%",
        padding: "1%",
        width: "150px",
        cursor: "pointer",
        borderRadius: "7px",
        boxShadow: " 2px 1px 1px "
      }}
    >
      <Link to={'/Album/'+id}>
         {/* image props contain link , sizeWidth(S,M,L) , borderRadius */}
        <Image src={userPic} size="L" radius='50%' />
        <p>{userName}</p>
      </Link>
    </div>
  );
};

export default User;
