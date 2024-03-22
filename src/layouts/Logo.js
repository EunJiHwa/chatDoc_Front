import React from "react";
import logo from "../assets/images/logos/kctclogl.png";

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} className="rounded-circle" width="200" />
    </a>
  );
};

export default Logo;
