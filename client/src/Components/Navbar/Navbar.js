import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  return (
    <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      <Link to="/" className="lottotracter navbar-brand mr-0 mr-md-2">
        Lottotracker
      </Link>
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li className="nav-item">
            <Link to="/picks" className={location.pathname === "/picks" ? "nav-link active" : "nav-link"}>
              Picks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/groups" className={location.pathname === "/groups" ? "nav-link active" : "nav-link"}>
              Groups
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li className="nav-item">
          <Link to="/signup" className="nav-link p-2" onClick={handleShow} data-bs-toggle="modal" data-view="#modal-signup-view">
            Sign up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link p-2" onClick={handleShow} data-bs-toggle="modal" data-view="#modal-signin-view">
            Log in
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
