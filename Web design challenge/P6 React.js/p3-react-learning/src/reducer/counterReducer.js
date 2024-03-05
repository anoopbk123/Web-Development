export const type = {
  changeValue: "changeValue",
  changeColor: "changeColor",
};
const counterReducer = (previousState, action) => {
  switch (action.type) {
    case type.changeValue:
      return { ...previousState, count: previousState.count + action.payload };
    case type.changeColor:
      return { ...previousState, color: action.payload };
    default:
      return previousState;
  }
};

export default counterReducer;
