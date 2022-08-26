// login page for users
// - moderator(admin)
// - college
// - professor
// - student

import {
  Box,
  Container,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
  FormControl,
  FormHelperText,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signin, authenticate, isAutheticated } from "../auth/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [role, setrole] = useState("");
  const [LoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    signin(user)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setEmail("");
          setPassword("");
          authenticate(data, () => {
            console.log("user is now authenticated");
            setLoggedIn(true);
          });
        }
      })
      .catch((err) => {
        console.log("Login not working : ", err);
      });
  };

  // const performRedirect = () => {
  //   if (redirect) {
  //     if (user && user.role === 1) {
  //       return <Navigate to="/admin/dashboard" />;
  //     } else {
  //       return <Navigate to="/user/dashboard" />;
  //     }
  //   }
  //   if (isAutheticated()) {
  //     return <Navigate to="/" />;
  //   }
  // };
  let navigate = useNavigate();

  useEffect(() => {
    if (LoggedIn) {
      return navigate("/submit");
    }
  }, [LoggedIn]);

  return (
    <Box
      component="main"
      sx={{
        py: 4,
        pt: 10,
        pb: 5,
        display: "flex",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h3">Login</Typography>
        <Card elevation={6}>
          <Divider />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <TextField
                  id="email"
                  aria-describedby="email"
                  label="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText id="email">Enter your email</FormHelperText>
              </FormControl>
              <FormControl>
                <TextField
                  id="password"
                  label="password"
                  aria-describedby="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormHelperText id="password">
                  Enter your password
                </FormHelperText>
              </FormControl>
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
