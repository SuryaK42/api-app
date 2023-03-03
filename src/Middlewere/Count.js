import React from "react";
import { AddCount, MinusCount } from "./Actions";
import { useSelector, useDispatch } from "react-redux";

const Count = () => {
  const value = useSelector((store) => store.count);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(AddCount())}>+</button>
      <button onClick={() => dispatch(MinusCount())}>-</button>
    </div>
  );
};

export default Count;
