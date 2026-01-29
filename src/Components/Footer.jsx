import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/Navbar/logo.png";
import footerBg from "../assets/Footer/img1.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    // show button after scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <footer
                style={{
                    backgroundImage: `url(${footerBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    color: "#d1d5db",
                    padding: "40px clamp(20px, 5vw, 60px) 20px",
                }}
            >
                <div className="container-fluid">
                    <div className="row">

                        {/* Quick Links */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 style={{ color: "white", marginBottom: "20px" }}>Quick Links</h5>
                            <ul style={{ lineHeight: "2", listStyleType: "disc" }}>
                                <li><Link to="/" style={linkStyle}>Home</Link></li>
                                <li><Link to="/services" style={linkStyle}>Services</Link></li>
                                <li><Link to="/talent_management" style={linkStyle}>Talent Management</Link></li>
                                {/* <li><Link to="/products" style={linkStyle}>Product</Link></li> */}
                                {/* <li><Link to="/industries" style={linkStyle}>Industries</Link></li> */}
                                {/* <li><Link to="/insights" style={linkStyle}>Insights</Link></li> */}
                                <li><Link to="/about" style={linkStyle}>About</Link></li>
                                <li><Link to="/prohub/Carrer" style={linkStyle}>Careers</Link></li>
                                <li><Link to="/prohub/internship" style={linkStyle}>Internship</Link></li>
                                <li><Link to="/prohub/referal" style={linkStyle}>Referal Program</Link></li>
                                <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* IT Services */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 style={{ color: "white", marginBottom: "20px" }}>
                                IT Services & Consulting
                            </h5>
                            <ul style={{ lineHeight: "2", listStyleType: "disc" }}>
                                <li>Software Development</li>
                                <li>Web Development</li>
                                <li>App Development</li>
                                <li>System Integration</li>
                                <li>Networking Solutions</li>
                            </ul>
                        </div>

                        {/* Talent Management */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 style={{ color: "white", marginBottom: "20px" }}>
                                Talent Management
                            </h5>
                            <ul style={{ lineHeight: "2", listStyleType: "disc" }}>
                                <li>Contract Staffing and Placement</li>
                                <li>Contract to Hire</li>
                                <li>Permanent Staffing</li>
                                <li>Supplier Rationalization</li>
                                <li>Hire, Train & Deploy</li>
                            </ul>
                        </div>

                        {/* Logo & Social */}
                        {/* Logo & Social */}
                        <div className="col-lg-3 col-md-6 text-lg-end text-md-start">
                            <img
                                src={logo}
                                alt="HRIFY Logo"
                                style={{
                                    height: "45px",
                                    background: "white",
                                    padding: "8px",
                                    borderRadius: "6px",
                                }}
                            />

                            {/* Social Icons */}
                            <div className="d-flex gap-3 justify-content-lg-end justify-content-start mt-4">
                                <a
                                    href="https://www.facebook.com/share/16sPa1rCRq/"
                                    style={iconStyle}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>

                                <a
                                    href="https://wa.me/+918608600778"
                                    style={iconStyle}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-whatsapp"></i>
                                </a>

                                <a
                                    href="https://www.instagram.com/hrifyofficial?igsh=MXFlYXl6MjMyZzZ4Nw=="
                                    style={iconStyle}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>

                            {/* Contact Details */}
                            <div
                                style={{
                                    marginTop: "20px",
                                    color: "#d1d5db",
                                    fontSize: "14px",
                                    lineHeight: "1.7",
                                }}
                            >
                                <p style={{ marginBottom: "8px" }}>
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    <a
                                        href="mailto:jayakrishnan@hrify.co.in"
                                        style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}
                                    >
                                        jayakrishnan@hrify.co.in
                                    </a>
                                </p>

                                <p style={{ marginBottom: 0, color: "#fff", fontWeight: "500" }}>
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    Annai Parvathi Nagar, Opp. Collector Office,<br />
                                    Vengikkal, Tiruvannamalai – 606604
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>

            {/* FLOATING BACK TO TOP BUTTON */}
            {showTopBtn && (
                <button
                    className="scroll-top-btn"
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0aa6c8, #0077a3)",
                        border: "none",
                        color: "#fff",
                        fontSize: "18px",
                        cursor: "pointer",
                        zIndex: 999,
                        boxShadow: "0 20px 30px rgba(24, 187, 205, 0.3)",
                    }}
                >
                    <i className="bi bi-arrow-up"></i>
                </button>

            )}
        </>
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
