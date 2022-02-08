export const initialState = {
  user: "Stranger",
};

export const userRedFunc = (state, action) => {
  switch (action.type) {
    case "user":
      return {
        ...state,
        user: action.value,
      };
    default:
      return;
  }
};
