/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)   //SetUser is accessed globally from the userContextPRovider 

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password })
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />{"  "}
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
