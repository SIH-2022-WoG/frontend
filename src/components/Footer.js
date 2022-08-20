import React from "react";

const style = {
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  paddingTop: "10px",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

const Footer = () => {
  return (
    <div>
      <div style={style}>
        © 2020 Copyright: <h4>WrathOfGod - SIH 2022</h4>
      </div>
    </div>
  );
};

export default Footer;
