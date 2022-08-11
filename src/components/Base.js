import React from "react";

const Base = ({ children, title = "Base" }) => {
  return (
    <div className="d-flex flex-column min-vh-100 container-fluid bg-dark">
      <h1 className="text-success m-5">{title}</h1>

      {children}

      <footer class="mt-auto bg-success">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright: <h4>WrathOfGod - SIH 2022</h4>
        </div>
      </footer>
    </div>
  );
};

export default Base;
