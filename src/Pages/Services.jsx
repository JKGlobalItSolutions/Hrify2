import "bootstrap/dist/css/bootstrap.min.css";
import video1 from "../assets/Services/hero-video.mp4";
import img2 from "../assets/Services/img2.png";
import img3 from "../assets/Services/img3.png";
import img11 from "../assets/Services/img11.png";
import img12 from "../assets/Services/img12.png";
import img13 from "../assets/Services/img13.png";
import img14 from "../assets/Services/img14.png";
import img15 from "../assets/Services/img15.png";
import img16 from "../assets/Services/img16.png";
import img17 from "../assets/Services/img17.png";
import img18 from "../assets/Services/img18.png";
import img19 from "../assets/Services/img19.png";
import img20 from "../assets/Services/img20.png";
import img21 from "../assets/Services/img21.png";
import img4 from "../assets/Services/img4.png";
import img5 from "../assets/Services/img5.png";
import bgimg1 from "../assets/Services/bgimg1.png";
import React, { useEffect, useRef, useState } from "react";
import Form from "../Components/Form"
// import { useRef } from "react";

/* RESPONSIVE STYLES FOR SERVICES SECTION WITH SINGLE LINE MARQUEE */
const servicesCarouselStyles = `
  /* Keyframes for seamless left-to-right infinite scroll */
  @keyframes marqueeScrollLTR {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Keyframes for seamless right-to-left infinite scroll */
  @keyframes marqueeScrollRTL {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  /* Main marquee container - single line */
  .marquee-container {
    width: 100%;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  /* Marquee wrapper for seamless looping */
  .marquee-wrapper {
    display: flex;
    gap: 1.5rem;
    width: fit-content;
  }

  /* Left-to-right animation */
  .marquee-wrapper.direction-ltr {
    animation: marqueeScrollLTR 80s linear infinite;
  }

  /* Right-to-left animation */
  .marquee-wrapper.direction-rtl {
    animation: marqueeScrollRTL 80s linear infinite;
  }

  /* Pause animation on hover */
  .marquee-container:hover .marquee-wrapper {
    animation-play-state: paused;
  }

  /* Responsive card sizing */
  .service-card {
    min-width: 360px;
    width: 360px;
    flex-shrink: 0;
    height: 100%;
  }

  /* Responsive image height */
  .service-card-image {
    height: 360px;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .service-card {
      min-width: 280px;
      width: 280px;
    }

    .service-card-image {
      height: 220px;
    }

    .marquee-container {
      margin-bottom: 1.5rem;
    }

    .marquee-wrapper {
      gap: 1rem;
    }
  }

  /* Tablet responsiveness */
  @media (max-width: 992px) and (min-width: 769px) {
    .service-card {
      min-width: 310px;
      width: 310px;
    }

    .service-card-image {
      height: 280px;
    }
  }
`;

function Services() {
    const [showContent, setShowContent] = useState(false);

    const scrollRef = useRef(null);
    const servicesScrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let direction = 1;
        let speed = 1.5; // adjust speed (higher = faster)
        let rafId;

        const animate = () => {
            const maxScroll =
                scrollContainer.scrollWidth - scrollContainer.clientWidth;

            // move scroll
            scrollContainer.scrollLeft += direction * speed;

            // reverse when end reached
            if (scrollContainer.scrollLeft >= maxScroll) {
                direction = -1;
            }
            // reverse when start reached
            if (scrollContainer.scrollLeft <= 0) {
                direction = 1;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(rafId);
    }, []);


    // Services scrolling effect
    useEffect(() => {
        const servicesContainer = servicesScrollRef.current;
        if (!servicesContainer) return;

        let direction = 1;
        let speed = 1.5; // adjust speed (higher = faster)
        let rafId;

        const animate = () => {
            const maxScroll =
                servicesContainer.scrollWidth - servicesContainer.clientWidth;

            // move scroll
            servicesContainer.scrollLeft += direction * speed;

            // reverse when end reached
            if (servicesContainer.scrollLeft >= maxScroll) {
                direction = -1;
            }
            // reverse when start reached
            if (servicesContainer.scrollLeft <= 0) {
                direction = 1;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(rafId);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            {/* Inject responsive styles */}
            <div className="container-fluid p-0">
                <div
                    className="d-flex justify-content-center align-items-start"
                    style={{
                        position: "relative",
                        minHeight: "100vh",
                        overflow: "hidden",
                    }}
                >
                    {/* Fixed Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: -2,
                        }}
                    >
                        <source src={video1} type="video/mp4" />
                    </video>

                    {/* Overlay */}
                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.4)",
                            zIndex: -1,
                        }}
                    ></div>

                    {/* Hero Content */}
                    <div
                        className="container-fluid"
                        style={{
                            position: "relative",
                            paddingTop: "400px",
                            paddingBottom: "80px",
                            color: "#fff",
                        }}
                    >
                        <div className="container">
                            <h1
                                style={{
                                    fontSize: "75px",
                                    paddingLeft: "30px",
                                    marginBottom: "10px",
                                }}
                            >
                                <b>Services</b>
                            </h1>

                            <h3
                                style={{
                                    paddingLeft: "30px",
                                    fontSize: "32px",
                                    fontWeight: "400",
                                    marginTop: 0,
                                }}
                            >
                                Smart IT Solutions Limitless Potential
                            </h3>
                            <p style={{
                                paddingLeft: "30px",
                                fontSize: "32px", fontSize: "50px"
                            }}>→</p>

                            {/* small scroll space only */}
                            <div style={{ height: "40vh" }}></div>
                        </div>
                    </div>
                </div>
            </div>




            <div style={{ backgroundColor: "#fff" }}>


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
                                        fontSize: "24px",
                                        fontFamily: "'Outfit', sans-serif"
                                    }}
                                >
                                    Empowering Businesses with Cutting-Edge IT Solutions
                                </h2>

                                <p style={{ fontSize: "18px", lineHeight: "1.7", fontFamily: "'Outfit', sans-serif" }}>
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
                    <h1 style={{ color: "#015670", fontSize: "36px", fontFamily: "'Outfit', sans-serif" }}><b>What We Do</b></h1>
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
    <style>{servicesCarouselStyles}</style>
    
    {/* SINGLE CONTINUOUS MARQUEE LINE - LEFT TO RIGHT */}
    <div className="marquee-container">
      <div className="marquee-wrapper direction-ltr">
        {/* First Set - Software Development */}
        <div className="service-card">
          <img src={img11} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Software Development</h4>
          <p>Our software development services turn your ideas into scalable, efficient solutions tailored to your business needs.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Web Development */}
        <div className="service-card">
          <img src={img12} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Web Development</h4>
          <p>We offer cutting-edge web development services to enhance your digital presence.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* App Development */}
        <div className="service-card">
          <img src={img13} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>App Development</h4>
          <p>We deliver innovative app solutions to elevate your digital presence.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* System Integration */}
        <div className="service-card">
          <img src={img14} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>System Integration</h4>
          <p>We unify your business systems for seamless connectivity and secure IT operations.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Networking Solutions */}
        <div className="service-card">
          <img src={img15} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Networking Solutions</h4>
          <p>Robust networking solutions including infrastructure, security, and cloud connectivity.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Cyber Security */}
        <div className="service-card">
          <img src={img16} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Cyber Security</h4>
          <p>Comprehensive security solutions to protect systems, data, and digital assets.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Blockchain */}
        <div className="service-card">
          <img src={img17} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Blockchain</h4>
          <p>Secure, transparent, and decentralized blockchain solutions for modern businesses.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* AI & ML */}
        <div className="service-card">
          <img src={img18} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>AI & ML</h4>
          <p>AI & ML powered solutions to automate processes and enable smarter decisions.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Manual Services */}
        <div className="service-card">
          <img src={img19} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Manual Services</h4>
          <p>Reliable manual services to streamline business processes and operations.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Enterprise Solutions */}
        <div className="service-card">
          <img src={img20} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Enterprise Solutions</h4>
          <p>Technology-driven enterprise solutions to scale and transform businesses.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Quality Engineering */}
        <div className="service-card">
          <img src={img21} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Quality Engineering</h4>
          <p>Ensuring high performance, reliability, and superior user experience.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Duplicate Set for Seamless Loop - Software Development */}
        <div className="service-card">
          <img src={img11} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Software Development</h4>
          <p>Our software development services turn your ideas into scalable, efficient solutions tailored to your business needs.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Web Development */}
        <div className="service-card">
          <img src={img12} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Web Development</h4>
          <p>We offer cutting-edge web development services to enhance your digital presence.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* App Development */}
        <div className="service-card">
          <img src={img13} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>App Development</h4>
          <p>We deliver innovative app solutions to elevate your digital presence.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* System Integration */}
        <div className="service-card">
          <img src={img14} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>System Integration</h4>
          <p>We unify your business systems for seamless connectivity and secure IT operations.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Networking Solutions */}
        <div className="service-card">
          <img src={img15} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Networking Solutions</h4>
          <p>Robust networking solutions including infrastructure, security, and cloud connectivity.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Cyber Security */}
        <div className="service-card">
          <img src={img16} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Cyber Security</h4>
          <p>Comprehensive security solutions to protect systems, data, and digital assets.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Blockchain */}
        <div className="service-card">
          <img src={img17} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Blockchain</h4>
          <p>Secure, transparent, and decentralized blockchain solutions for modern businesses.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* AI & ML */}
        <div className="service-card">
          <img src={img18} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>AI & ML</h4>
          <p>AI & ML powered solutions to automate processes and enable smarter decisions.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Manual Services */}
        <div className="service-card">
          <img src={img19} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Manual Services</h4>
          <p>Reliable manual services to streamline business processes and operations.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Enterprise Solutions */}
        <div className="service-card">
          <img src={img20} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Enterprise Solutions</h4>
          <p>Technology-driven enterprise solutions to scale and transform businesses.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>

        {/* Quality Engineering */}
        <div className="service-card">
          <img src={img21} className="img-fluid" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
          <h4 style={{ marginTop: "25px", color: "#0b5c75", fontWeight: 700 }}>Quality Engineering</h4>
          <p>Ensuring high performance, reliability, and superior user experience.</p>
          <div style={{ fontSize: "26px", color: "#0b5c75" }}>→</div>
        </div>
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
                                    <h2 style={{ color: "#fff", fontSize: "24px", fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                                        Why Choose Us?
                                    </h2>

                                    <h5 style={{ color: "#FFD700", fontSize: "24px", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                                        Agile Development Process
                                    </h5>
                                    <p style={{ color: "#fff", fontSize: "24px", fontFamily: "'Outfit', sans-serif", lineHeight: "1.7" }}>
                                        We deliver results faster and more effectively by breaking projects
                                        into manageable phases.
                                    </p>

                                    <h5 style={{ color: "#FFD700", fontSize: "24px", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                                        Secure and Scalable Solutions
                                    </h5>
                                    <p style={{ color: "#fff", fontSize: "24px", fontFamily: "'Outfit', sans-serif", lineHeight: "1.7" }}>
                                        Our solutions are designed with robust security protocols.
                                    </p>

                                    <h5 style={{ color: "#FFD700", fontSize: "24px", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                                        End-to-End Support
                                    </h5>
                                    <p style={{ color: "#fff", fontSize: "24px", fontFamily: "'Outfit', sans-serif", lineHeight: "1.7" }}>
                                        From consultation to deployment, we provide continuous assistance.
                                    </p>

                                    <h5 style={{ color: "#FFD700", fontSize: "24px", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                                        Latest Technologies
                                    </h5>
                                    <p style={{ color: "#fff", fontSize: "24px", fontFamily: "'Outfit', sans-serif", lineHeight: "1.7" }}>
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
                    <h2 style={{ color: "#015670", fontFamily: "'Outfit', sans-serif", fontSize: "36px" }}><b>Ready to Start Your Project?</b></h2>
                    <p style={{ color: "#949494", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>We’re here to help you transform your ideas into reality. Reach out to discuss how we can work together.</p>

                </div>

                <Form />
            </div>
        </>);
}

export default Services;