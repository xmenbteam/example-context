import { createContext, useReducer } from "react";
import { initialState, userRedFunc } from "./UserContext";

export const User = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userRedFunc, initialState);
  return <User.Provider value={{ state, dispatch }}>{children}</User.Provider>;
};
