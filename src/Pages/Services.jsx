import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/Services/img1.png";
import img2 from "../assets/Services/img2.png";
import img3 from "../assets/Services/img3.png";
import img11 from "../assets/Services/img11.png";
import img12 from "../assets/Services/img12.png";
import img13 from "../assets/Services/img13.png";
import img14 from "../assets/Services/img14.png";
import img15 from "../assets/Services/img15.png";
import img4 from "../assets/Services/img4.png";
import img5 from "../assets/Services/img5.png";
import bgimg1 from "../assets/Services/bgimg1.png";
import React, { useEffect, useRef, useState } from "react";
import Form from "../Components/Form"



function Services() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>


            <div className="container-fluid mt-5 mb-3">
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
                            // backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                    ></div>

                    {/* Glass effect content */}
                    <div
                        className="container-fluid"
                        style={{
                            position: "relative",
                            marginTop: "clamp(100px, 60vh, 3000px)",
                            // marginTop: "clamp(60px, 12vh, 120px)",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(10px)",
                            padding: "2rem",
                            color: "#fff",
                        }}
                    >
                        <div className="container">
                            <h1 className="mb-3" style={{ fontSize: "40px", fontFamily: "'Poppins', sans-serif" }}>
                                Smart IT Solutions Limitless Potential
                            </h1>

                            <p
                                className="text-center text-md-start"
                                style={{
                                    fontSize: "20px",
                                    fontFamily: "'Poppins', sans-serif" // Responsive font
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
                                    color: "#015670",
                                    fontSizez: "24px",
                                    fontFamily: "poppins"
                                }}
                            >
                                Empowering Businesses with Cutting-Edge IT Solutions
                            </h2>

                            <p style={{ fontSize: "18px", lineHeight: "1.7", fontFamily: "poppins" }}>
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
                <h1 style={{ color: "#015670", fontSize: "36px", fontFamily: "poppins" }}><b>What We Do</b></h1>





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
                                src={img14}
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
                                src={img15}
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
                className="container-fluid p-0 m-0 mt-5 mb-5"
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



            <div className="container-fluid">
                <div className="row min-vh-100">

                    {/* LEFT SIDE */}
                    <div className="col-lg-6 d-flex align-items-center p-0">
                        <div
                            className="w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{ backgroundColor: "black", padding: "60px" }}
                        >
                            <div className="text-center">
                                <h2 style={{ color: "#fff",fontSize:"24px", fontFamily:"poppins", fontWeight: 700 }}>
                                    Why Choose Us?
                                </h2>

                                <h5 style={{ color: "#FFD700",fontSize:"24px", fontFamily:"poppins", fontWeight: 600 }}>
                                    Agile Development Process
                                </h5>
                                <p style={{ color: "#fff",fontSize:"24px", fontFamily:"poppins", lineHeight: "1.7" }}>
                                    We deliver results faster and more effectively by breaking projects
                                    into manageable phases.
                                </p>

                                <h5 style={{ color: "#FFD700",fontSize:"24px", fontFamily:"poppins", fontWeight: 600 }}>
                                    Secure and Scalable Solutions
                                </h5>
                                <p style={{ color: "#fff", fontSize:"24px", fontFamily:"poppins",lineHeight: "1.7" }}>
                                    Our solutions are designed with robust security protocols.
                                </p>

                                <h5 style={{ color: "#FFD700", fontSize:"24px", fontFamily:"poppins",fontWeight: 600 }}>
                                    End-to-End Support
                                </h5>
                                <p style={{ color: "#fff", fontSize:"24px", fontFamily:"poppins",lineHeight: "1.7" }}>
                                    From consultation to deployment, we provide continuous assistance.
                                </p>

                                <h5 style={{ color: "#FFD700",fontSize:"24px", fontFamily:"poppins", fontWeight: 600 }}>
                                    Latest Technologies
                                </h5>
                                <p style={{ color: "#fff", fontSize:"24px", fontFamily:"poppins",lineHeight: "1.7" }}>
                                    We use cutting-edge tools to keep your business ahead.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-6 p-0">
                        <img
                            src={bgimg1}
                            alt="Why choose us"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
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
                <h2 style={{ color: "#015670", fontFamily:"poppins", fontSize:"36px" }}><b>Ready to Start Your Project?</b></h2>
                <p style={{ color: "#949494", fontFamily:"poppins", fontSize:"20px" }}>We’re here to help you transform your ideas into reality. Reach out to discuss how we can work together.</p>

            </div>


            <Form/>



        </>
    );
}

export default Services;
