import { createStore } from "redux";
import { applyMiddleware } from "redux";

import BookReducer from "./BookReducer";

const myVlogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("we are in Middlwere");
      return next(action);
    };
  };
};
// const myVlogger = store =>action=>

const store = createStore(BookReducer, applyMiddleware(myVlogger));

export default store;
