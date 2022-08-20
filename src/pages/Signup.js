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
import Base from "../components/Base";
import { backend } from "../backend";
import { Paper, TextField, MenuItem, Select, Button } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [group, setGroup] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password, passwordConfirm: confirmPassword, group };
    // console.log(user);
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
      <Paper elevation={4}>
        <div className="container m-10 p-10 w-50 bg-dark">
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              type="text"
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <br />

            <TextField
              id="password"
              type="text"
              required
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>

            <br />

            <TextField
              id="confirm-password"
              type="text"
              required
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></TextField>

            <br />

            <Select
              label="Role"
              labelId="role"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <MenuItem value="moderator">Moderator</MenuItem>
              <MenuItem value="college">College</MenuItem>
              <MenuItem value="professor">Professor</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
            <br />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </div>
      </Paper>
    </Base>
  );
};

export default Login;
