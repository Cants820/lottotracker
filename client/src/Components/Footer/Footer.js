import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; { new Date().getFullYear() } Lottotracker</p>
    </footer>
  );
}

export default Footer;
