import { useContext, useState } from "react";
import { User } from "../Context/UserProvider";

export const UserForm = () => {
  const { dispatch } = useContext(User);

  const [localUser, setLocalUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "user", value: localUser });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setLocalUser(e.target.value)}
          value={localUser}
          placeholder="What's your username?"
        />
        <button>Submit</button>
      </form>
    </>
  );
};
