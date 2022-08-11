// login page for users
// - moderator(admin)
// - college
// - professor
// - student

import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password, role };
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="moderator">Moderator</option>
          <option value="college">College</option>
          <option value="professor">Professor</option>
          <option value="student">Student</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
