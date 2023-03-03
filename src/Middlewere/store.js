import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { Add, Minus } from "./Actions";

import { CountReducer } from "./CountReducer";

const myVlogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("we are in Middlwere 1", store);

      return next(action);
    };
  };
};
const conMiddlewere = (store) => (next) => (action) => {
  console.log("We are in middlewere 2");
  if (store.getState().count >= 5) {
    return next({ type: "minus" });
  } else if (store.getState().count <= -5) {
    return next({ type: "add" });
  }
  return next(action);
};

export const store = createStore(
  CountReducer,
  applyMiddleware(myVlogger, conMiddlewere)
);
