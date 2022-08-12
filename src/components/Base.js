import React from "react";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";

const Base = ({ children, title = "Base" }) => {
  return (
    <div className="d-flex flex-column min-vh-100 container-fluid bg-dark p-0">
      <Navigationbar />
      <h1 className="text-success m-5">{title}</h1>
      {children}
      <Footer />
    </div>
  );
};

export default Base;
