import { useContext } from "react";
import "./App.css";
import { UserForm } from "./Components/UserForm";
import { User } from "./Context/UserProvider";

function App() {
  const { state } = useContext(User);
  const { user } = state;

  return (
    <div className="App">
      <h1>Hello, {user}!</h1>
      <UserForm />
    </div>
  );
}

export default App;
