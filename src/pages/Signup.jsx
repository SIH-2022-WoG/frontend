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
import {
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  TextField,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
import { backend } from "../backend";

const Signup = () => {
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
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
        pt: 10,
        pb: 5,
        display: "flex",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h3">Signup</Typography>
        <Card elevation={6}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FormControl fullwidth>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <TextField
                  id="email"
                  aria-describedby="email"
                  variant="outlined"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <FormHelperText id="email">Enter your email</FormHelperText>
              </FormControl>
              <FormControl fullwidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  id="password"
                  aria-describedby="password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                {/* <FormHelperText id="password">
                  Enter your email
                </FormHelperText> */}
              </FormControl>
              <FormControl fullwidth>
                <InputLabel htmlFor="confirmpassword">Confirm password</InputLabel>
                <TextField
                  id="confirmpassword"
                  aria-describedby="confirm password"
                  type="password"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                {/* <FormHelperText id="password">
                  Enter your email
                </FormHelperText> */}
              </FormControl>
              <FormControl fullwidth>
                <InputLabel htmlFor="group">Group</InputLabel>
                <Select
                  labelId="group"
                  id="group"
                  value={group}
                  label="Group"
                  onChange={(e)=>setGroup(e.target.value)}
                >
                  <MenuItem value={1}>Moderator</MenuItem>
                  <MenuItem value={2}>Professor</MenuItem>
                  <MenuItem value={3}>Student</MenuItem>
                </Select>
                {/* <FormHelperText id="password">
                  Enter your email
                </FormHelperText> */}
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Signup;
