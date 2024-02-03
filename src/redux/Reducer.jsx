const initialCount = {
  count: 0,
};

const reducer = (state = initialCount, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }

    default:
      return state;
  }
};

export default reducer;
