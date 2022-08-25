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
  CardHeader,
  Divider,
  Typography,
  TextField,
  FormControl,
  Input,
  InputLabel,
  FormHelperText, 
  Button  
} from "@mui/material";
import React, { useState } from "react";
// import { Button } from "react-bootstrap";
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
        <Typography variant="h3">Login</Typography>
        <Card elevation={6}>
          <Divider />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FormControl fullwidth>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <TextField id="email" aria-describedby="email" variant="outlined"/>
                <FormHelperText id="email">
                  Enter your email
                </FormHelperText>
              </FormControl>
              <FormControl fullwidth>
                <InputLabel htmlFor="password">Password address</InputLabel>
                <TextField id="password" aria-describedby="password" variant="outlined"/>
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

export default Login;
