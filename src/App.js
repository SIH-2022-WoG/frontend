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
import AllTheses from "./pages/student/AllTheses"
import Dashboardmain from "./components/dashboard/dashboard-main"
import Thesis from "./pages/Thesis";
import Profile from "./pages/Profile";
import ViewProfile from "./pages/ViewProfile";
import SubmitThesis from "./pages/SubmitThesis";
import Search from "./pages/Search"

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Base setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen}>
            <Router>
              <Routes>
                <Route exact path="/" /*element={<Homepage />}*/ />
                <Route path="/dashboard" element={<Dashboard setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} element={<Dashboardmain />} />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/theses" element={<Dashboard setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} element={<AllTheses />} />} />
                <Route exact path="/thesis" element={<Dashboard setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} element={<Thesis />} />} />
                <Route exact path="/profile" element={<Dashboard setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} element={<Profile />} />} />
                <Route exact path="/viewprofile" element={<ViewProfile />} />
                <Route exact path="/submit" element={<SubmitThesis />} />
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
