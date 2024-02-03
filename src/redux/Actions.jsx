const increaseLikes = () => {
  return {
    type: "INCREMENT",
  };
};

const decreaseLikes = () => {
  return {
    type: "DECREMENT",
  };
};

export { increaseLikes, decreaseLikes };
