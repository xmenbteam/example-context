import { useContext, useState } from "react";
import { User } from "../Context/UserProvider";

export const UserForm = () => {
  const { dispatch, state } = useContext(User);
  const { isLoggedIn } = state;
  const [localUser, setLocalUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoggedIn
      ? dispatch({ type: "logout" })
      : dispatch({ type: "login", value: localUser });
    setLocalUser("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setLocalUser(e.target.value)}
          value={localUser}
          placeholder="What's your username?"
        />
        <button>{isLoggedIn ? "Log Out" : "Log In"}</button>
      </form>
    </>
  );
};
