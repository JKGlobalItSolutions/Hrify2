import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
      style={{
        padding: "15px clamp(10px, 4vw, 40px)",
        transition: "all 0.3s ease",
        zIndex: 1050
      }}
    >
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="HRIFY Logo"
            style={{ height: "58px" }}
          />
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hrifyNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="hrifyNavbar">
          <ul
            className="navbar-nav mx-auto mb-2 mb-lg-0"
            style={{
              gap: "22px",
              fontSize: "16px",
              fontWeight: 600
            }}
          >
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/talent_management">Talent Management</Link></li>

            {/* Product */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Product & Solutions
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/pillamar">Pillamar</Link></li>
                <li><Link className="dropdown-item" to="/sonachala">Sonachala</Link></li>
              </ul>
            </li>

            {/* Industries */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Industries
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/industries/Industry_AM">Automotive & Mobility</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_HL">Healthcare & Life Sciences</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_EU">Energy & Utilities</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/opportunities">Opportunities</Link></li>

            {/* Careers */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Careers
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/prohub/Carrer">Career</Link></li>
                <li><Link className="dropdown-item" to="/prohub/internship">Internship</Link></li>
                <li><Link className="dropdown-item" to="/prohub/referal">Referral Program</Link></li>
              </ul>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <Link
              to="/contact"
              className="btn"
              style={{
                background: "linear-gradient(to right, #015670, #0081A7)",
                color: "#fff",
                borderRadius: "8px"
              }}
            >
              Contact Us
            </Link>

            <Link
              to="/admin"
              className="btn"
              style={{
                background: "linear-gradient(to right, #015670, #0081A7)",
                color: "#fff",
                borderRadius: "8px"
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
