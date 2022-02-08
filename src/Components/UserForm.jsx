import { useContext, useState } from "react";
import { User } from "../Contexts/UserContext/UserProvider";
import { ThemeContext } from "../Contexts/ThemeContext/ThemeProvider";
import { Button } from "../StyledComponents/Button";

export const UserForm = () => {
  const { dispatch, state: userState } = useContext(User);
  const { state: themeState } = useContext(ThemeContext);
  const { isLoggedIn } = userState;
  const { theme } = themeState;
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
        <Button primary theme={theme}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
      </form>
    </>
  );
};
