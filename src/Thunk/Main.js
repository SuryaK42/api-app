import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomUser } from "./DataSlice";
import { increment, decrement } from "./DataSlice";

const Main = () => {
  const [show, setShow] = useState(false);
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();

  // console.log(data.user);
  return (
    <div>
      <h1>{data.count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button
        onClick={() => {
          dispatch(fetchRandomUser());
          console.log(fetchRandomUser());
          setShow(true);
        }}
      >
        Click
      </button>
      {show &&
        data.user.map((val) => (
          <div key={val.id}>
            <h1>{val.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default Main;
