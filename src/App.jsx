import { useContext } from "react";
import "./App.css";
import { UserForm } from "./Components/UserForm";
import { ThemeContext } from "./Contexts/ThemeContext/ThemeProvider";
import { User } from "./Contexts/UserContext/UserProvider";
import { Button } from "./StyledComponents/Button";
import { AppDiv } from "./StyledComponents/MainDiv";

function App() {
  const { state: userState } = useContext(User);
  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);
  const { user, isLoggedIn } = userState;
  const { theme } = themeState;

  const handleThemeChange = (pageTheme) => {
    switch (pageTheme.type) {
      case "light":
        themeDispatch({ type: "dark" });
        break;
      case "dark":
        themeDispatch({ type: "light" });
        break;
      default:
        return;
    }
  };

  return (
    <AppDiv theme={theme}>
      {isLoggedIn ? <h1>Hello, {user}!</h1> : <h1>Hello, Stranger!</h1>}
      <h2>{theme.type.toUpperCase()} MODE ACTIVATED</h2>
      <Button theme={theme} onClick={() => handleThemeChange(theme)}>
        Change theme!
      </Button>
      <UserForm />
    </AppDiv>
  );
}

export default App;
