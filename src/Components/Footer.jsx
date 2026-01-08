import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
    return (
        <footer
            style={{
                background: "linear-gradient(135deg, #0b0f14, #1a1f24)",
                color: "#d1d5db",
                padding: "40px clamp(20px, 5vw, 60px) 0px clamp(20px, 5vw, 60px)",
            }}
        >
            <div className="container-fluid">
                <div className="row">


                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 style={{ color: "white", marginBottom: "20px" }}>Quick links</h5>
                        <ul className="" style={{ lineHeight: "2", listStyleType: "disc" }}>
                            <li><Link to="/" style={linkStyle}>Home</Link></li>
                            <li><Link to="/services" style={linkStyle}>Services</Link></li>
                            <li><Link to="/talent" style={linkStyle}>Talent Management</Link></li>
                            <li><Link to="/product" style={linkStyle}>Product</Link></li>
                            <li><Link to="/industries" style={linkStyle}>Industries</Link></li>
                            <li><Link to="/insights" style={linkStyle}>Insights</Link></li>
                            <li><Link to="/about" style={linkStyle}>About</Link></li>
                            <li><Link to="/careers" style={linkStyle}>Careers</Link></li>
                            <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                        </ul>
                    </div>


                    {/* IT Services */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 style={{ color: "white", marginBottom: "20px" }}>IT Services & Consulting</h5>
                        <ul className="" style={{ lineHeight: "2", listStyleType: "disc" }}>
                            <li>Software Development</li>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>System Integration</li>
                            <li>Networking Solutions</li>
                        </ul>
                    </div>


                    {/* Talent Management */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 style={{ color: "white", marginBottom: "20px" }}>Talent Management</h5>
                        <ul className="" style={{ lineHeight: "2", listStyleType: "disc" }}>
                            <li >Contract Staffing and Placement</li>
                            <li >Contract to Hire</li>
                            <li >Permanent Staffing</li>
                            <li >Supplier Rationalization</li>
                            <li >Hire, Train & Deploy</li>
                        </ul>
                    </div>


                    {/* Logo & CTA */}
                    <div className="col-lg-3 col-md-6 text-lg-end text-md-start">
                        <img
                            src={logo}
                            alt="HRIFY Logo"
                            style={{ height: "45px", background: "white", padding: "8px", borderRadius: "6px" }}
                        />


                        <div className="mt-4">
                            <button
                                className="btn"
                                style={{
                                    background: "linear-gradient(135deg, #0aa6c8, #0077a3)",
                                    color: "white",
                                    borderRadius: "30px",
                                    padding: "10px 24px",
                                    fontWeight: 600,
                                }}
                            >
                                Download Broacher
                            </button>
                        </div>


                        {/* Social Icons */}
                        <div className="d-flex gap-3 justify-content-lg-end justify-content-start mt-4">
                            <a href="#" style={iconStyle}>
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" style={iconStyle}>
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href="#" style={iconStyle}>
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="#" style={iconStyle}>
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="#" style={iconStyle}>
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>

                    </div>


                </div>
            </div>
        </footer>
    );
}
const iconStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#0aa6c8",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    textDecoration: "none",
};


const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
};


export default Footer;
