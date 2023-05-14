import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux/es/exports";

export const Login = () => {
  const [newUsername, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <>
      <h1>This is the Login page {username}</h1>
      <input
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />

      <button
        type="submit"
        onClick={() => dispatch(login({ username: newUsername }))}
      >
        Login
      </button>
      <button type="submit" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </>
  );
};
