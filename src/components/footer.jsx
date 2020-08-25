import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light">
      <p>
        Template built for PAGO using{" "}
        <NavLink to="https://getbootstrap.com/">Bootstrap</NavLink>
      </p>
      <p>
        <NavLink to="#">Back to top</NavLink>
      </p>
    </footer>
  );
};

export default Footer;
