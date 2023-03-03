import { buy_books, empty_books, sold_books } from "./BookTypes";

const initialState = {
  numberOfBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  console.log("We are in Reducer");
  switch (action.type) {
    case buy_books:
      return {
        // ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };
    case sold_books:
      return {
        numberOfBooks: state.numberOfBooks + 1,
      };
    case empty_books:
      return {
        numberOfBooks: 0,
      };

    default:
      return state;
  }
};
export default BookReducer;
