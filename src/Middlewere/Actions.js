export const Add = "add";
export const Minus = "minus";
export const AddCount = () => {
  return {
    type: Add,
  };
};
export const MinusCount = () => {
  return {
    type: Minus,
  };
};
