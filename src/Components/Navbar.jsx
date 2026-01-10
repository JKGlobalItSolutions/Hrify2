import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white"
      style={{ padding: "15px clamp(10px, 4vw, 40px)", borderBottom: "1px solid #eee" }}
    >
      <div className="container-fluid mt-1  mb-1">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="HRIFY Logo"
            style={{ height: "38px", width: "auto" }}
          />
        </Link>

        {/* Toggle Button (IMPORTANT) */}
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
            style={{ gap: "22px", fontWeight: 500 }}
          >
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/talent_management">Talent Management</Link></li>
 {/* <li className="nav-item"><Link className="nav-link" to="/trust">Trust</Link></li> */}

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="productDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product & Solutions
              </Link>

              <ul className="dropdown-menu" aria-labelledby="productDropdown">
                <li>
                  <Link className="dropdown-item" to="/pillamar">
                    Pillamar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sonachala">
                    Sonachala
                  </Link>
                </li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="prohubDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                Industries
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/industries/Industry_AM">
                    Automotive and Mobility
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/industries/Industry_HL">
                    Healthcare and Life Sciences
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/industries/Industry_EU">
                    Energy and Utilities definition
                  </Link>
                </li>
              </ul>
            </li>



            <li className="nav-item"><Link className="nav-link" to="/opportunities">Opportunities</Link></li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="prohubDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                Prohub
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/prohub/Carrer">
                    Carrer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/prohub/internship">
                    Internship
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/prohub/referal">
                    Referal Program
                  </Link>
                </li>
              </ul>
            </li>

           

          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <Link
              to="/contact"
              className="btn"
              style={{ background: "#0a6c8c", color: "white", borderRadius: "8px" }}
            >
              Contact Us
            </Link>
            <Link
              to="/admin"
              className="btn"
              style={{ background: "#0a6c8c", color: "white", borderRadius: "8px" }}
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
