// "email" : "ben.stokes@ecb.co.uk",
// "password" : "1234sayan",
// "passwordConfirm" : "1234sayan",
// "group" : "student"

// login page for users
// - moderator(admin)
// - college
// - professor
// - student

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Base from "../components/Base";
import { backend } from "../backend";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [group, setGroup] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password, passwordConfirm: confirmPassword, group };
    console.log(user);
    fetch(backend + "/user/prl/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => () => console.log(res.json()))
      .catch((err) => console.log(err));
  };

  return (
    <Base title="Signup">
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

          <label className="text-secondary m-3">Confirm Password</label>
          <input
            className="form-control"
            type="text"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>

          <label className="text-secondary m-3">Group</label>
          <select
            className="form-control"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="moderator">Moderator</option>
            {/*<option value="college">College</option>*/}
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
