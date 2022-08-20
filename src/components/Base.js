import React from "react";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";
import { Container,  Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Base = ({ children, title, setSidebarOpen, isSidebarOpen }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Toolbar />
      <CssBaseline />
      <Container maxWidth="lg" sx={4}>
        <Navigationbar
          setSidebarOpen={setSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />

        <h1 style={{ margin: "5px" }}> {title}</h1>

        {children}

        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Base;
