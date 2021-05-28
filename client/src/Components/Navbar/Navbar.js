import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar contain">
      <h1 className="brand-logo">
        <a href="/" className="branding">Lottotracker</a>
      </h1>
      <ul className="hold-right">
        <li className="item"><a href="/picks">picks</a></li>
        <li className="item"><a href="/groups">groups</a></li>
        <li className="item"><a href="/settings">settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
