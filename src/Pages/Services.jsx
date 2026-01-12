import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/Services/img1.png";
import img2 from "../assets/Services/img2.png";
import img3 from "../assets/Services/img3.png";
import img11 from "../assets/Services/img11.png";
import img12 from "../assets/Services/img12.png";
import img13 from "../assets/Services/img13.png";
import img4 from "../assets/Services/img4.png";
import img5 from "../assets/Services/img5.png";
import bgimg1 from "../assets/Services/bgimg1.png";
import React, { useEffect, useRef, useState } from "react";



function Services() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            <div className="container mt-5">
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
                            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.4)",
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
                                Smart IT Solutions Limitless Potential
                            </h1>

                            <p
                                className="text-center text-md-start"
                                style={{
                                    fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font
                                }}
                            >
                                “Delivering tailored IT solutions that drive innovation,
                                streamline operations, and keep your business ahead in the
                                digital era.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid py-5 mt-5"
                style={{
                    background: "linear-gradient(135deg, #CFF4FF 0%, #FFFFFF 100%)",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT - col-8 */}
                        <div className="col-12 col-md-8 mb-4 mb-md-0">
                            <h2
                                style={{
                                    fontWeight: "700",
                                    marginBottom: "20px",
                                    color: "#015670"
                                }}
                            >
                                Empowering Businesses with Cutting-Edge IT Solutions
                            </h2>

                            <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
                                HRIFY is a comprehensive management solutions platform designed to enhance efficiency and drive growth. With two specialized divisions, HRIFY seamlessly integrates cutting-edge technology with expert talent management. HRIFYDIGITAL offers exceptional software, web, and app development, advanced networking solutions, and expert IT services and consulting to future-proof your business.
                            </p>


                        </div>

                        {/* RIGHT IMAGE - col-4 */}
                        <div className="col-12 col-md-4 text-center">
                            <div
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    padding: "20px",
                                    borderRadius: "14px",
                                    // boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                    display: "inline-block",
                                }}
                            >
                                <img
                                    src={img2}
                                    alt="IT Solutions"
                                    className="img-fluid"
                                    style={{
                                        borderRadius: "10px",
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container text-center mt-5">
                <h1 style={{ color: "#015670" }}><b>What We Do</b></h1>





            </div>
            <div
                className="container"
                style={{
                    marginTop: "80px",
                    minHeight: "500px",
                    position: "relative",
                }}
            >
                {/* FIRST IMAGE */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: showContent ? 0 : 1,
                        transition: "opacity 1s ease",
                        pointerEvents: "none",
                    }}
                >
                    <img
                        src={img3}
                        alt="IT Solutions"
                        className="img-fluid"
                        style={{
                            borderRadius: "10px",
                            maxHeight: "420px",
                            objectFit: "cover",
                        }}
                    />
                </div>

                {/* SECOND CONTENT */}
                <div
                    style={{
                        opacity: showContent ? 1 : 0,
                        transform: showContent ? "scale(1)" : "scale(0.95)",
                        transition: "all 1s ease",
                    }}
                >
                    <div className="row g-5">

                        {/* Software */}
                        <div className="col-md-4">
                            <img
                                src={img11}
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "260px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}
                            />
                            <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>
                                Software Development
                            </h4>
                            <p>
                                Our software development services turn your ideas into scalable,
                                efficient solutions tailored to your business needs.
                            </p>
                            <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
                        </div>

                        {/* Web */}
                        <div className="col-md-4">
                            <img
                                src={img12}
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "260px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}
                            />
                            <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>
                                Web Development
                            </h4>
                            <p>
                                We offer cutting-edge web development services to enhance your
                                digital presence.
                            </p>
                            <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
                        </div>

                        {/* App */}
                        <div className="col-md-4">
                            <img
                                src={img13}
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "260px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}
                            />
                            <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>
                                App Development
                            </h4>
                            <p>
                                We deliver innovative web development services to elevate your
                                digital presence.
                            </p>
                            <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
                        </div>


                        {/* System Integration */}
                        <div className="col-md-4">
                            <img
                                src={img1}
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "260px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}
                            />
                            <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>
                                System Integration
                            </h4>
                            <p>
                                Our System Integration services unify your business systems for seamless
                                connectivity, efficiency, and secure IT operations.
                            </p>
                            <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
                        </div>

                        {/* Networking Solutions */}
                        <div className="col-md-4">
                            <img
                                src={img2}
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "260px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}
                            />
                            <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>
                                Networking Solutions
                            </h4>
                            <p>
                                We deliver robust networking solutions including infrastructure setup,
                                network security, surveillance, and cloud-native connectivity.
                            </p>
                            <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
                        </div>





                    </div>
                </div>
            </div>


            <div
                className="container-fluid p-0 m-0 mt-5"
                style={{ overflow: "hidden" }}
            >
                <img
                    src={img4}
                    alt="IT Solutions"
                    style={{
                        width: "100vw",
                        height: "auto",
                        display: "block",
                        margin: "0",
                        padding: "0",
                    }}
                />
            </div>



            <div
                className="container-fluid py-5 mt-5 mb-5"
                style={{
                    backgroundImage: `url(${bgimg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "transparent",
                }}
            >
                <div className="container" style={{ backgroundColor: "transparent" }}>
                    <div className="row justify-content-center">
                        <div
                            className="col-12 col-md-10 text-center"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <h2 style={{ color: "#fff", fontWeight: 700 }}>
                                Why Choose Us?
                            </h2>
                            <h5 style={{ color: "#FFD700", fontWeight: "600" }}>
                                Agile Development Process
                            </h5>
                            <p style={{ color: "#ffffff", lineHeight: "1.7" }}>
                                We deliver results faster and more effectively by breaking projects
                                into manageable phases, ensuring flexibility and client involvement
                                at every step.
                            </p>

                            <h5 style={{ color: "#FFD700", fontWeight: "600", marginTop: "20px" }}>
                                Secure and Scalable Solutions
                            </h5>
                            <p style={{ color: "#ffffff", lineHeight: "1.7" }}>
                                Our solutions are designed with robust security protocols and
                                scalability, enabling your business to grow without compromising
                                on safety or performance.
                            </p>

                            <h5 style={{ color: "#FFD700", fontWeight: "600", marginTop: "20px" }}>
                                End-to-End Support
                            </h5>
                            <p style={{ color: "#ffffff", lineHeight: "1.7" }}>
                                From initial consultation to deployment and maintenance, we provide
                                continuous assistance to ensure a smooth and successful journey.
                            </p>

                            <h5 style={{ color: "#FFD700", fontWeight: "600", marginTop: "20px" }}>
                                Latest Technologies
                            </h5>
                            <p style={{ color: "#ffffff", lineHeight: "1.7" }}>
                                We utilize cutting-edge tools and frameworks to build innovative
                                solutions that keep your business ahead in a competitive landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div
                    className="d-flex justify-content-center align-items-start"
                    style={{
                        position: "relative",
                        width: "100%",
                        minHeight: "100vh",
                        margin: 0,
                        padding: 0,
                        backgroundImage: `url(${img5})`,
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
                            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                    ></div>

                    {/* Glass effect content */}
                    <div
                        className="container-fluid"
                        style={{
                            position: "relative",
                            marginTop: "clamp(140px, 28vh, 280px)",
                            backgroundColor: "rgba(10, 157, 231, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            padding: "2rem",
                            color: "#fff",
                        }}
                    >
                        <div className="container" style={{ backgroundColor: "white" }}>
                            <h2 className=" p-3 text-center" style={{ color: "#0081A7" }}>
                                <b>Solutions We Provide</b>
                            </h2>

                            <p
                                className="text-center pb-2 text-md-start"
                                style={{
                                    fontSize: "clamp(16px, 2.5vw, 20px)",
                                    color: "#000000"
                                }}
                            >
                                <b>We offer comprehensive solutions tailored to meet your unique business needs. From IT infrastructure and cloud services to digital marketing and staffing solutions, our expert team ensures seamless execution and measurable results. With a client-first approach, we focus on quality, reliability, and innovation to help you grow faster and smarter.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-4 mb-2 text-center">
                <h2 style={{ color: "#015670" }}><b>Ready to Start Your Project?</b></h2>
                <p style={{ color: "#000000" }}>We’re here to help you transform your ideas into reality. Reach out to discuss how we can work together.</p>

            </div>


            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}
            >
                <div
                    className="card p-4"
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.50)",
                    }}
                >
                    <h4 className="text-center mb-4">Submit Your Inquiry</h4>

                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Business Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your business email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">I am seeking</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="What are you seeking?"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">
                            Give us an overview of your expectations
                        </label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Describe your expectations"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn w-100"
                        style={{
                            backgroundColor: "#015670",
                            color: "#ffffff",
                            fontWeight: "500",
                        }}
                    >
                        Submit Inquiry
                    </button>
                </div>
            </div>



        </>
    );
}

export default Services;
