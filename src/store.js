import { configureStore } from "@reduxjs/toolkit";
import { increment, decrement } from "./Thunk/DataSlice";
// import userReducer from "./features/UserSlice";
import DataReducer from "./Thunk/DataSlice";

const conMiddlewere = (store) => (next) => (action) => {
  if (store.getState().data.count >= 2) {
    return next({ type: decrement });
  } else if (store.getState().data.count <= -5) {
    return next({ type: increment });
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    // users: userReducer,
    data: DataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(conMiddlewere),
});

export default store;
