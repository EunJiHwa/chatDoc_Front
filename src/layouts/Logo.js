import React from "react";
import logo from "../assets/images/logos/ic_launcher.png";

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} className="rounded-circle" width="100" />
    </a>
  );
};

export default Logo;
