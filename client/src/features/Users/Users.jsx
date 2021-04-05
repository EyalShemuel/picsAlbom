import React from "react";
import { useSelector, useDispatch } from "react-redux";

import User from "./User";
import { userSelectors } from "../../Store/UserSlice";

const Users = (props) => {
 
  const allUsers = useSelector(userSelectors.selectEntities);

  const usersList = [];

  for (const id in allUsers) {
    if (Object.hasOwnProperty.call(allUsers, id)) {
      const person = allUsers[id];

      usersList.push(
        <User
          key={person.id}
          id={person.id}
          userName={person.user}
          userPic={person.userPic}
        />
      );
    }
  }

  return (
    <div >
      <h1>Users</h1>
      <div className="users-grid">{usersList}</div>
    </div>
  );
};

export default Users;
