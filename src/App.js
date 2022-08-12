import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" /*element={<Homepage />}*/ />
          <Route path="/dashboard" /*element={<Dashboard />}*/ />
          <Route exact path="/search" /*element={<Search />}*/ />
          <Route exact path="/theses" /*element={<Theses />}*/ />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
