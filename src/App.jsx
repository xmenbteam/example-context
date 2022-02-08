import { useContext } from "react";
import "./App.css";
import { UserForm } from "./Components/UserForm";
import { User } from "./Context/UserProvider";

function App() {
  const { state } = useContext(User);
  const { user, isLoggedIn } = state;

  return (
    <div className="App">
      {isLoggedIn ? <h1>Hello, {user}!</h1> : <h1>Hello, Stranger!</h1>}
      <UserForm />
    </div>
  );
}

export default App;
