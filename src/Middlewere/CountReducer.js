import { Add, Minus } from "./Actions";

const initialState = {
  count: 0,
};

export const CountReducer = (state = initialState, action) => {
  console.log("we are in Reducers");
  switch (action.type) {
    case Add:
      return {
        count: state.count + 1,
      };
    case Minus:
      return {
        count: state.count - 1,
      };
    default: {
      return state;
    }
  }
};
