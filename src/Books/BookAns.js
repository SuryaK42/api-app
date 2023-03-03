import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { purchase_book, sold_book, empty_book } from "./BookAction";

const BookAns = () => {
  const value = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(purchase_book());
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleClick}>Minus</button>
      <button onClick={() => dispatch(empty_book())}>Refresh</button>
      <button onClick={() => dispatch(sold_book())}>Add</button>
    </div>
  );
};

export default BookAns;
