import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <h1>
        Lottotracker
      </h1>
      <ul>
        <li><a href="/picks">picks</a></li>
        <li><a href="/groups">groups</a></li>
        <li><a href="/settings">settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
