// login page for users
// - moderator(admin)
// - college
// - professor
// - student

import React, { useState } from "react";
import Base from "../components/Base";
import { Paper, TextField, MenuItem, Select, Button } from "@mui/material";

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

            <Select
              label="Role"
              labelId="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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
