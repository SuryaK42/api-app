import { buy_books, empty_books, sold_books } from "./BookTypes";
export const purchase_book = () => {
  return { type: buy_books };
};

export const sold_book = () => {
  return { type: sold_books };
};

export const empty_book = () => {
  return { type: empty_books };
};
