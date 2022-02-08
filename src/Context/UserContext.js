export const initialState = {
  user: "",
  isLoggedIn: false,
};

export const userRedFunc = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.value,
        isLoggedIn: true,
      };
    case "logout":
      return {
        ...state,
        user: "",
        isLoggedIn: false,
      };
    default:
      return;
  }
};
