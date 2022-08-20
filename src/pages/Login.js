// login page for users
// - moderator(admin)
// - college
// - professor
// - student

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Base from "../components/Base";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password, role };
    console.log(user);
  };

  return (
    <Base title="Login">
      <div className="container m-10 p-10 w-50 bg-dark">
        <form onSubmit={handleSubmit}>
          <label className="text-secondary m-3">Email</label>
          <input
            className="form-control"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label className="text-secondary m-3">Password</label>
          <input
            className="form-control"
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <label className="text-secondary m-3">Role</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="moderator">Moderator</option>
            <option value="college">College</option>
            <option value="professor">Professor</option>
            <option value="student">Student</option>
          </select>

          <Button
            className="m-5 btn btn-success btn-lg text-white"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </Base>
  );
};

export default Login;
