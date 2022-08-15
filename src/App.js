import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Dashboard} from "./pages/Dashboard";
import Base from "./components/Base";

function App() {
  // const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Base>
            <Router>
              <Routes>
                <Route exact path="/" /*element={<Homepage />}*/ />
                <Route path="/dashboard" element={<Dashboard /*onSidebarOpen={() => setSidebarOpen(true)}*/ />} />
                <Route exact path="/search" /*element={<Search />}*/ />
                <Route exact path="/theses" /*element={<Theses />}*/ />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </Router>
          </Base>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
