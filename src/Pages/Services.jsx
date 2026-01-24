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

/* RESPONSIVE STYLES FOR SERVICES SECTION */
const servicesCarouselStyles = `
  /* Ensure proper container height on all devices */
  .services-carousel-container {
    min-height: 600px;
    height: auto;
  }

  /* Responsive card sizing */
  .service-card {
    min-width: 360px;
    width: 360px;
    height: 100%;
  }

  /* Responsive image height */
  .service-card-image {
    height: 360px;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .service-card {
      min-width: 300px;
      width: 300px;
    }

    .service-card-image {
      height: 300px;
    }

    .services-carousel-container {
      min-height: 550px;
    }

    /* Show scrollbar on mobile for better UX */
    .services-scroll-container {
      scrollbar-width: thin !important;
      -ms-overflow-style: auto !important;
    }
  }

  /* Tablet responsiveness */
  @media (max-width: 992px) and (min-width: 769px) {
    .service-card {
      min-width: 330px;
      width: 330px;
    }

    .service-card-image {
      height: 330px;
    }
  }
`;

function Services() {
    const [showContent, setShowContent] = useState(false);

      const scrollRef = useRef(null);

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




<div style={{backgroundColor:"#fff"}}>


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

{/* SERVICES CAROUSEL SECTION */}
<div className="container py-5 services-carousel-container">
  <div
    ref={scrollRef}
    className="services-scroll-container"
    style={{
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollBehavior: "smooth",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      height: "500px",
      width: "100%",
      position: "relative"
    }}
  >
    <div
      className="d-flex gap-5"
      style={{
        width: "max-content",
        height: "100%",
        alignItems: "flex-start"
      }}
    >
      {[
        { img: img11, title: "Software Development", desc: "Our software development services turn your ideas into scalable, efficient solutions tailored to your business needs." },
        { img: img12, title: "Web Development", desc: "We offer cutting-edge web development services to enhance your digital presence." },
        { img: img13, title: "App Development", desc: "We deliver innovative web development services to elevate your digital presence." },
        { img: img14, title: "System Integration", desc: "Our System Integration services unify your business systems for seamless connectivity, efficiency, and secure IT operations." },
        { img: img15, title: "Networking Solutions", desc: "We deliver robust networking solutions including infrastructure setup, network security, surveillance, and cloud-native connectivity." },
        { img: img16, title: "Cyber Security", desc: "We offer comprehensive BPO services designed to optimize your business processes and improve efficiency, ensuring secure and reliable operations." },
        { img: img17, title: "Blockchain", desc: "Hrify Digital provides advanced blockchain solutions ensuring security, transparency, and trust to drive innovation and long-term growth." },
        { img: img18, title: "AI & ML", desc: "We leverage Artificial Intelligence and Machine Learning to automate processes, gain insights, and unlock new business opportunities." },
        { img: img19, title: "Manual Service", desc: "We provide comprehensive manual services to simplify business processes and enhance operational efficiency." },
        { img: img20, title: "Enterprise", desc: "Hrify Digital Enterprise empowers organizations with technology-driven digital consulting and scalable enterprise solutions." },
        { img: img21, title: "Quality Engineering", desc: "Our Quality Engineering team ensures high performance, reliability, and superior user experience across all solutions." },
      ].map((item, i) => (
        <div key={i} className="service-card" style={{ flexShrink: 0, height: "100%" }}>

          {/* IMAGE + CONTENT WRAPPER (SAME WIDTH) */}
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>

            {/* IMAGE */}
            <div className="service-card-image" style={{ width: "100%", overflow: "hidden", borderRadius: "4px" }}>
              <img
                src={item.img}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>

            {/* CONTENT */}
            <div style={{ width: "100%", padding: "15px 0", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <h4
                style={{
                  marginTop: "15px",
                  color: "#0b5c75",
                  fontWeight: 700,
                  fontSize: "24px",
                  marginBottom: "8px"
                }}
              >
                {item.title}
              </h4>

              <p style={{ width: "100%", fontSize: "16px", lineHeight: "1.6", wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", marginBottom: "10px", flex: 1 }}>{item.desc}</p>

              <div style={{ fontSize: "26px", color: "#0b5c75", marginTop: "auto", flexShrink: 0 }}>→</div>
            </div>

          </div>
        </div>
      ))}
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