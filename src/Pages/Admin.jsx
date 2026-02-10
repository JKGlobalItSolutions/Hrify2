import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        
        {/* LOGO */}
        <Link className="navbar-brand fw-bold" to="/">
          HRIFY
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">

            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                Product & Solutions
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                Industries
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                Opportunities
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                Careers
              </Link>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-primary btn-sm">
                Contact Us
              </button>
            </li>

            <li className="nav-item">
              <Link to="/admin">
                <button className="btn btn-primary btn-sm">
                  Login
                </button>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
