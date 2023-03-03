import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const user = useSelector((store) => store.users);
  console.log(user);
  return (
    <div>
      {user.map((item, i) => (
        <div key={i}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
