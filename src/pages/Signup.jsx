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
  Button,
} from "@mui/material";
import { signup, authenticate, isAutheticated } from "../auth/helper";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [group, setGroup] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password, passwordConfirm: confirmPassword, group };
    console.log(user);
    signup(user)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setGroup("student");
        }
      })
      .catch((err) => {
        console.log("Login not working : ", err);
      });
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
              <FormControl>
                <TextField
                  id="email"
                  label="email"
                  aria-describedby="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText id="email"> </FormHelperText>
              </FormControl>
              <FormControl>
                <TextField
                  id="password"
                  label="password"
                  aria-describedby="password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <FormHelperText id="password">
                  Enter your email
                </FormHelperText> */}
              </FormControl>
              <FormControl>
                <TextField
                  id="confirmpassword"
                  label="confirm password"
                  aria-describedby="confirm password"
                  type="password"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                  label="group"
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <MenuItem value={"moderator"}>Moderator</MenuItem>
                  <MenuItem value={"professor"}>Professor</MenuItem>
                  <MenuItem value={"student"}>Student</MenuItem>
                </Select>
                {/* <FormHelperText id="password">
                  Enter your email
                </FormHelperText> */}
              </FormControl>
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Signup;
