import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import video1 from "../assets/Home/hero-video.mp4";
import img1 from "../assets/Home/img11.jpeg";
import img2 from "../assets/Home/img2.jpg";
import img3 from "../assets/Home/img3.jpg";
import img4 from "../assets/Home/img4.jpg";


import { motion } from "framer-motion";


function Home() {
  return (
    <>
{/* 
      ================= HERO SECTION =================
      <div className="container-fluid p-0">
        <div
          className="d-flex justify-content-center align-items-start"
          style={{
            position: "relative",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          Fixed Background Video
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

          Overlay
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: -1,
            }}
          ></div>

          Hero Content
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
                <b>Hrify</b>
              </h1>

              <h3
                style={{
                  paddingLeft: "30px",
                  fontSize: "32px",
                  fontWeight: "400",
                  marginTop: 0,
                }}
              >
                Leading the way forward
              </h3>
              <p style={{
                paddingLeft: "30px",
                fontSize: "32px", fontSize: "50px"
              }}>→</p>

              small scroll space only
              <div style={{ height: "40vh" }}></div>
            </div>
          </div>
        </div>
      </div> */}





<div style={{ backgroundColor: "#fff" }}>
  <section
    style={{
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      background: "linear-gradient(180deg, #0f3a4f 0%, #1e5a73 100%)",
      paddingTop: "140px",
      paddingBottom: "120px", // wave-ku space
    }}
  >
    {/* Floating blobs */}
    <motion.div
      style={{
        position: "absolute",
        top: "80px",
        left: "40px",
        width: "280px",
        height: "280px",
        borderRadius: "50%",
        background: "rgba(245,194,107,0.15)",
        filter: "blur(120px)",
      }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      style={{
        position: "absolute",
        bottom: "80px",
        right: "60px",
        width: "380px",
        height: "380px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.12)",
        filter: "blur(140px)",
      }}
      animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Bottom wave */}
    <svg
      viewBox="0 0 1440 120"
      style={{ position: "absolute", bottom: 0, width: "100%" }}
    >
      <path
        fill="#fff"
        d="M0 60C240 120 480 0 720 60C960 120 1100 0 1440 60V120H0Z"
      />
    </svg>

    <div
      className="hero-wrapper"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
      }}
    >
      {/* LEFT */}
      <div className="hero-left" style={{ flex: 1, color: "#fff" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 16px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            marginBottom: "24px",
            fontSize: "14px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#007EA3",
            }}
          />
          A HRIFY Initiative
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
          style={{
            fontSize: "50px",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#f5c26b" }}>HRIFY</span>
          <br />
          Empowering Talent. 
          <br />
          <span style={{ opacity: 0.85 }}>Enabling Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-text"
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "480px",
            marginBottom: "32px",
          }}
        >
          End-to-end HR and workforce solutions designed for today’s evolving businesses. We connect the right people to the right roles—efficiently and ethically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons"
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          <button
            style={{
              background: "#f5c26b",
              color: "#1a1a1a",
              border: "none",
              padding: "16px 30px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            →
          </button>

          {/* <button
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.35)",
              padding: "16px 30px",
              borderRadius: "999px",
              fontSize: "16px",
            }}
          >
            Download Free Toolkit
          </button> */}
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-right"
        style={{ flex: 1 }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 40px 90px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={img1}
            alt="Career comeback"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              // background:"linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
            }}
          />
        </div>
      </motion.div>
    </div>

    {/* RESPONSIVE */}
    <style>
      {`
        @media (max-width: 992px) {
          .hero-wrapper {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-text {
            margin: 0 auto 28px;
          }

          .hero-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 32px;
          }

          .hero-text {
            font-size: 16px;
          }

          .hero-right {
            margin-top: 20px;
          }
        }
      `}
    </style>
  </section>
</div>




      {/* ================= CONTENT SECTION ================= */}
      <div style={{ backgroundColor: "#fff",  }}>

        {/* WHAT WE DO */}
        <div className="mb-5 pt-5">
          <div
            style={{
              backgroundColor: "#0080A7",
              display: "inline-block",
              padding: "10px 25px",
            }}
          >
            <h2
              style={{
                fontWeight: "700",
                margin: 0,
                color: "#fff",
                fontSize: "50px",
              }}
            >
              What We Do!
            </h2>
          </div>
        </div>

        {/* INTRO */}
        <div
          className="mb-5"
          style={{
            background: "linear-gradient(90deg, #CFF4FF 0%, #FFFFFF 100%)",
            padding: "60px 0",
          }}
        >
          <div className="container text-center">
            <h2
              className="fw-bold mb-3"
              style={{
                background: "linear-gradient(to right, #015670, #0081A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Platform for Success
            </h2>

            <p
              style={{
                color: "#000",
                lineHeight: "1.7",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              HRIFY is a leading business and digital consulting firm, helping
              organizations overcome complex challenges and unlock new growth
              opportunities through innovative strategies and smart digital
              solutions.
            </p>
          </div>
        </div>




        <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
          <div className="container-fluid py-4">

            {/* Digital Technology Services */}
            <div
              className="mb-4 pb-3" // Bootstrap spacing
              style={{
                fontWeight: "700",
                // borderBottom: "1px solid #e0e0e0", // main bottom line for the block
              }}
            >
              <h4
                className="mb-4 fw-bold" // Bootstrap bold + margin bottom
                style={{
                  fontSize: "30px",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                Digital Technology Services
              </h4>

              <p
                className="mb-0 px-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  borderBottom: "2px solid rgba(0,0,0,0.1)", // faint line
                  boxShadow: "0px 5px 10px rgba(0,0,0,0.1)", // 👈 increased height & blur
                  display: "inline-block",
                  paddingBottom: "5px",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >

                Our specialized digital services division, Hrify Digital, delivers
                exceptional digital solutions that empower clients to transform and
                revolutionize their businesses.

              </p>

            </div>


            {/* Digital Technology Services */}
            <div
              className="mb-4 pb-3" // Bootstrap spacing
              style={{
                fontWeight: "700",
                fontFamily: "'Poppins', sans-serif"
                // borderBottom: "1px solid #e0e0e0", // main bottom line for the block
              }}
            >
              <h4
                className="mb-4 fw-bold" // Bootstrap bold + margin bottom
                style={{
                  fontSize: "30px",
                }}
              >
                Staffing & Talent Management
              </h4>

              <p
                className="mb-0 px-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  borderBottom: "2px solid rgba(0,0,0,0.1)", // faint line
                  boxShadow: "0px 5px 10px rgba(0,0,0,0.1)", // 👈 increased height & blur
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >

                We are a digital consulting company that believes in
                technology-driven transformation to create meaningful and lasting
                impact. Our expertise enables clients to identify, recruit, and
                place specialized talent, ensuring success today while building a
                strong foundation for the future.

              </p>

            </div>

            {/* Business Process Management */}
            {/* Digital Technology Services */}
            <div
              className="mb-4 pb-3" // Bootstrap spacing
              style={{
                fontWeight: "700",
                fontFamily: "'Poppins', sans-serif"
                // borderBottom: "1px solid #e0e0e0", // main bottom line for the block
              }}
            >
              <h4
                className="mb-4 fw-bold" // Bootstrap bold + margin bottom
                style={{
                  fontSize: "30px",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                Business Process Management
              </h4>

              <p
                className="mb-0 px-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  borderBottom: "2px solid rgba(0,0,0,0.1)", // faint line
                  boxShadow: "0px 5px 10px rgba(0,0,0,0.1)", // 👈 increased height & blur
                  display: "inline-block",
                  paddingBottom: "5px",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >

                We create robust digital business frameworks through continuous
                analysis, testing, iteration, and performance monitoring to drive
                long-term success and growth. Our business consulting services go
                beyond meeting client needs by delivering a clear digital roadmap
                that enables confident, data-driven decisions.

              </p>

            </div>

          </div>
        </div>













        {/* IMAGES */}
        <div className="container-fluid py-4 mb-5">
          <div className="row g-4">
            {[img2, img3, img4].map((img, index) => (
              <div className="col-md-4" key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className="img-fluid"
                    style={{
                      width: "90%",
                      height: "300px",   // ✅ SAME HEIGHT
                      objectFit: "cover", // ✅ CROPPING OK
                      borderRadius: "6px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* FINAL SECTION */}
        <div className="container-fluid py-5 text-center">
          <h2
            className="fw-bold mb-4"
            style={{ color: "#003241", fontSize: "60px" }}
          >
            Reinventing the Future
          </h2>

          <p
            style={{
              color: "#0081A7",
              maxWidth: "1300px",
              margin: "0 auto",
              fontSize: "30px",
              lineHeight: "1.7",
            }}
          >
            <b>Reinventing the Future by driving innovation, embracing digital
              transformation, and delivering forward-thinking solutions that empower
              businesses to grow, adapt, and succeed in a rapidly evolving world.</b>
          </p>
        </div>

      </div>
    </>
  );
}

export default Home;
