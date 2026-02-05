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

  const textColor = scrolled ? "#000" : "#fff";

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: scrolled ? "#fff" : "transparent",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
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
            style={{
              height: "58px",
              transition: "0.3s"
            }}
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
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Talent Management", path: "/talent_management" },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className="nav-link"
                  to={item.path}
                  style={{
                    color: textColor,
                    transition: "color 0.3s"
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Product */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
                style={{ color: textColor }}
              >
                Product & Solutions
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sonachala">
                    Sonachala
                  </Link>
                </li>
              </ul>
            </li>

            {/* Industries */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                style={{
                  color: textColor,
                  textDecoration: "none"
                }}
              >
                Industries
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/industries/Industry_AM">Automotive & Mobility</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_HL">Healthcare & Life Sciences</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_EU">Energy & Utilities</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_BF">Banking & Finance</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/opportunities"
                style={{ color: textColor }}
              >
                Opportunities
              </Link>
            </li>

            {/* Careers */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                style={{
                  color: textColor,
                  textDecoration: "none"
                }}
              >
                Careers
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/prohub/Carrer">Career</Link></li>
                <li><Link className="dropdown-item" to="/prohub/internship">Internship</Link></li>
                <li><Link className="dropdown-item" to="/prohub/referal">Referral Program</Link></li>
                <li><Link className="dropdown-item" to="/prohub/revive">Revive</Link></li>
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
