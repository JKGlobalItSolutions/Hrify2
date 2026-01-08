import React from 'react';

import SonachalaLogo from '../assets/images/Products/sonachala-logo.png'
import Img2 from '../assets/images/Products/img2.png'
import Img3 from '../assets/images/Products/img3.png'
import Img4 from '../assets/images/Products/img4.png'
import Img5 from '../assets/images/Products/img5.png'
import Img6 from '../assets/images/Products/img6.png'
import Img7 from '../assets/images/Products/img7.png'
import Img8 from '../assets/images/Products/img8.png'

const Sonachala = () => {
    return (
        <>
            {/* HERO SECTION */}
            <div
                className="mb-5"
                style={{
                    background: "linear-gradient(135deg, #038A5F, #012419)",
                    minHeight: "clamp(300px, 45vh, 450px)",
                    padding: "2rem 0"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">

                        <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4 mb-lg-0">
                            <img
                                src={SonachalaLogo}
                                alt="Hotel"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                        <div className="col-lg-6 col-md-12 d-flex align-items-center">
                            <div className="text-white text-center text-lg-start">
                                <h1 style={{
                                    fontWeight: 600,
                                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
                                }}>
                                    Hotel Revenue Management Solutions
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* REVENUE MANAGEMENT */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h3 style={{ color: "#038A5F" }}><b>Revenue Management</b></h3>
                        <p>
                            Sonachala equips hotels with intelligent pricing strategies
                            to maximize revenue while maintaining high occupancy rates.
                        </p>
                        <p>
                            Dynamic pricing ensures rooms are always competitively priced.
                        </p>
                        <p>
                            Adjust rates instantly and monitor performance from a single dashboard.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={Img2} alt="" style={{ width: "100%", height: "300px", objectFit: "contain" }} />
                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 mb-5 text-white"
                style={{ background: "linear-gradient(135deg, #038A5F, #012419)" }}>
                <p>
                    ✅ Dynamic pricing  
                    ✅ Automated seasonal adjustments  
                    ✅ Real-time insights  
                    ✅ Maximize occupancy
                </p>
            </div>

            {/* BOOKING ENGINE */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                        <img src={Img3} alt="" style={{ width: "100%", height: "300px", objectFit: "contain" }} />
                    </div>
                    <div className="col-lg-8">
                        <h3 style={{ color: "#038A5F" }}><b>Booking Engine</b></h3>
                        <p>
                            Capture direct bookings with a fast and optimized booking engine.
                        </p>
                        <p>
                            Secure payments and instant confirmations included.
                        </p>
                    </div>
                </div>
            </div>

            {/* SOFTWARE */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h3 style={{ color: "#038A5F" }}><b>Software</b></h3>
                        <p>
                            Integrated PMS and Channel Manager to streamline hotel operations.
                        </p>
                        <p>
                            Real-time OTA sync and smart reporting tools.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={Img4} alt="" style={{ width: "100%", height: "300px", objectFit: "contain" }} />
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center my-5">
                <h2><b>Want to Explore More?</b></h2>
                <p>Visit our official website to learn more</p>
                <a
                    href="https://sonachala.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        padding: "12px 32px",
                        background: "linear-gradient(135deg, #038A5F, #012419)",
                        color: "#fff",
                        borderRadius: "30px",
                        textDecoration: "none",
                        display: "inline-block"
                    }}
                    onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
                    onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                >
                    Go To Main Sonachala Site
                </a>
            </div>
        </>
    );
};

export default Sonachala;
