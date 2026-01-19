import img1 from "../assets/Carrer/img1.png"
import img2 from "../assets/Carrer/img2.png"
import React, { useState } from "react";

function Carrer() {


    const [hover, setHover] = useState(false);

    const primaryColor = "#015670";
    const hoverColor = "#0081A7";


    return (

        <>
            <div className="container mt-5 mb-5">
                <div
                    className="d-flex justify-content-center align-items-start"
                    style={{
                        position: "relative",
                        width: "100%",
                        minHeight: "100vh",
                        margin: 0,
                        padding: 0,
                        backgroundImage: `url(${img1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        overflow: "hidden", // FIX horizontal scroll
                    }}
                >
                    {/* Overlay for better contrast */}
                    <div
                        style={{
                            position: "absolute",
                            // inset: 0,
                            // backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                    ></div>

                    {/* Glass effect content */}
                    <div
                        className="container-fluid"
                        style={{
                            position: "relative",
                            marginTop: "clamp(60px, 12vh, 120px)",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            padding: "2rem",
                            color: "#fff",
                        }}
                    >
                        <div className="container">
                            <h1 className="mb-3 text-center text-md-start">
                                Create Your Career Journey
                            </h1>

                            <p
                                className="text-center text-md-start"
                                style={{
                                    fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font
                                }}
                            >
                                "Your future starts here. Shape your career
                                with us and grow in a supportive environment."
                            </p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container-fluid p-0">
                <img
                    src={img2}
                    alt="Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
                    }}
                />
            </div>


            <div className="container mt-4 mb-3 text-center">
                <h2 style={{ color: "#015670", fontFamily:"poppins", fontSize:"36px" }}><b>Join Our Team and Help Us Shape the Future</b></h2>
                <p style={{ color: "#949494", fontFamily:"poppins", fontSize:"20px" }}>Fill out the form below to express your interest in a career with us. We’re looking for passionate, skilled
                    professionals for roles in IT staffing, consulting, talent management, and more.</p>

            </div>


            <div className="container py-5">
                <div
                    className="mx-auto p-4 shadow rounded"
                    style={{ maxWidth: "900px", backgroundColor: "#ffffff" }}
                >
                    <div className="row g-4">

                        {/* Full Name */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Full Name</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Email Address</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Phone */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Phone Number</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Location */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Location</label>
                            <div className="input-group">
                                <input className="form-control" style={{ borderColor: primaryColor }} />
                                <span className="input-group-text" style={{ color: primaryColor }}>▼</span>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">LinkedIn Profile</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Resume */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Resume Upload</label>
                            <div className="input-group">
                                <input type="file" className="form-control" />
                                <span className="input-group-text" style={{ color: primaryColor }}>⬆</span>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Professional Experience</label>
                            <textarea className="form-control" rows="4" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Why Us */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Why Do You Want to Work With Us?</label>
                            <textarea className="form-control" rows="4" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Position */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">
                                Position You're Interested In
                            </label>

                            <select
                                className="form-select"
                                style={{ borderColor: primaryColor }}
                            >
                                <option value="">Select Position</option>
                                <option value="it-solutions">IT Solutions & Consulting</option>
                                <option value="talent-management">Talent Management</option>
                                <option value="it-staffing">IT Staffing</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Preferred Job Type</label>

                            <select
                                className="form-select"
                                style={{ borderColor: primaryColor }}
                            >
                                <option value="">Select Job Type</option>
                                <option value="full-time">Full-Time</option>
                                <option value="part-time">Part-Time</option>
                                <option value="contract">Contract</option>
                                <option value="temporary">Temporary</option>
                                <option value="remote">Remote</option>
                                <option value="on-site">On-Site</option>
                            </select>
                        </div>

                        {/* Additional Info */}
                        <div className="col-12">
                            <label className="fw-semibold mb-1">Additional Information</label>
                            <textarea className="form-control" rows="4" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Button */}
                        <div className="col-12 text-center mt-4">
                            <button
                                className="btn px-5 py-2 text-white"
                                style={{
                                    backgroundColor: hover ? hoverColor : primaryColor,
                                    borderRadius: "25px",
                                    transition: "0.3s",
                                }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                Submit Application
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="col-12 text-center mt-3">
                            <small className="text-muted">
                                By submitting your application, you consent to the processing of your
                                personal information as per our privacy policy.
                            </small>
                        </div>

                    </div>
                </div>
            </div>




        </>
    );
}




export default Carrer