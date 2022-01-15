import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(login({ username: username, password: password }));

    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onClick={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onClick={(e) => setPassword(e.target.value)}
          name="password"
          type="text"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
