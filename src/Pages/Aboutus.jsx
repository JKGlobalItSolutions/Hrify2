import img1 from "../assets/About/img1.png";
import video1 from "../assets/About/video1.mp4";
import whoWeAreImg from "../assets/About/img2.png";
import bgimg1 from "../assets/About/bgimg1.png";
import img3 from "../assets/About/img3.png";
import img4 from "../assets/About/img4.png";
import HrifyLogo from "../assets/Navbar/logo.png";
import Form from "../Components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
function About() {



const fadeUpStyle = {
  animation: "fadeUp 1.2s ease-out forwards",
  opacity: 0,
};

const arrowStyle = {
  fontSize: "50px",
  display: "inline-block",
  animation: "arrowMove 1.5s ease-in-out infinite",
};



const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5, // seconds (increase this)
      ease: "easeOut"
    }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5, // seconds increase
      ease: "easeOut"
    }
  }
};


  return (
    <>



    <style>
        {`
          body { margin:0; }

          .glass-card{
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(14px);
            border-radius: 24px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.08);
            height: 100%;
          }

          .gradient-text{
            background: linear-gradient(90deg,#0dcaf0,#015670);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hover-lift{
            transition: all 0.4s ease;
          }

          .hover-lift:hover{
            transform: translateY(-12px);
            box-shadow: 0 30px 70px rgba(0,0,0,0.12);
          }

          .service-icon{
            font-size: 42px;
            margin-bottom: 15px;
          }
        `}
      </style>
      {/* REMOVE DEFAULT BODY MARGIN */}
      <style>
        {`body { margin: 0; padding: 0; }`}
      </style>


   {/* ================= HERO SECTION ================= */}
      <div className="container-fluid p-0">
      <div
        className="d-flex align-items-center"
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(244, 238, 238, 0))",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            paddingTop: "120px",
            paddingBottom: "60px",
            paddingLeft: "30px",
            ...fadeUpStyle,
          }}
        >
          <h1 style={{ fontSize: "75px", fontWeight: "700" }}>
            About Us
          </h1>

          <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
            Connecting talent with opportunity
          </h3>

          {/* Animated Arrow */}
          <p style={arrowStyle}>→</p>
        </div>

        {/* Animations */}
        <style>
          {`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes arrowMove {
              0% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(20px); /* ~5cm */
              }
              100% {
                transform: translateX(0);
              }
            }
          `}
        </style>
      </div>
    </div>





      {/* ================= CONTENT SECTION ================= */}
      {/* 🔥 mt-5 REMOVED HERE */}
      <div
        className="mt-0"
        style={{
          backgroundColor: "#fff",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="container text-center pt-3">

          <h2 className="mt-5 mb-3 fw-bold" style={{ fontSize: "40px", fontFamily: "'Outfit', sans-serif" }} >Streamlining Talent Management for Business Growth </h2>
          <p className="mb-5" style={{ color: "#015670", fontSize: "18px", fontFamily: "'Outfit', sans-serif" }}>HRIFY specializes in providing comprehensive talent management services tailored to meet diverse business needs, with a focus on IT Staffing. We offer flexible solutions, including: </p>
        </div>





      {/* ================= WHO WE ARE ================= */}
      <div style={{ background: "#f6fbfd", padding: "90px 0" }}>
        <div className="container">
          <div className="row align-items-center">

            <motion.div
              className="col-lg-6 mb-4 mb-lg-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <div className="glass-card p-3">
                <img
                  src={whoWeAreImg}
                  alt="Who We Are HRIFY"
                  className="img-fluid"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <span
                style={{
                  background: "#e6f7fc",
                  color: "#015670",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600"
                }}
              >
                WHO WE ARE
              </span>

              <h2 style={{ fontSize: "42px", fontWeight: "700", marginTop: "20px" }}>
                Empowering Businesses Through People
              </h2>

              <p style={{ fontSize: "18px", lineHeight: "1.8", marginTop: "20px" }}>
                HRIFY is a people-first IT staffing and talent solutions company dedicated to helping organizations build high-performing teams. We specialize in IT staffing, strategic talent management, and technology services that enable businesses to scale faster and smarter.

                With a deep understanding of the evolving tech landscape, we connect skilled professionals with the right opportunities through flexible hiring models, quality-driven recruitment, and long-term partnerships. From startups to enterprises, we act as a trusted partner in aligning talent, technology, and business goals.

                At HRIFY, we don’t just fill roles — we build careers, empower diversity through initiatives like our REVIVE program, and deliver workforce solutions that drive sustainable growth.
              </p>
            </motion.div>

          </div>
        </div>
      </div>


 <motion.div
        className="container py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="gradient-text text-center mb-5" style={{fontSize:"40px"}} ><b>Our Services</b></h2>

        <div className="row g-4">

          {/* IT Staffing */}
          <div className="col-md-4">
            <div className="glass-card p-4 hover-lift">
              {/* <div className="service-icon">👨‍💻</div> */}
              <h4>IT Staffing</h4>
              <p>
                End-to-end IT staffing solutions delivering skilled professionals
                for contract, permanent, and project-based roles.
              </p>
              <ul>
                <li>Contract & Permanent Hiring</li>
                <li>Contract-to-Hire</li>
                <li>On-demand Workforce</li>
              </ul>
            </div>
          </div>

          {/* Talent Management */}
          <div className="col-md-4">
            <div className="glass-card p-4 hover-lift">
              {/* <div className="service-icon">🎯</div> */}
              <h4>Talent Management</h4>
              <p>
                Strategic talent programs designed to attract, develop, and
                retain high-performing professionals.
              </p>
              <ul>
                <li>Leadership Hiring</li>
                <li>REVIVE – Women Returnship</li>
                <li>Talent Pipeline Building</li>
              </ul>
            </div>
          </div>

          {/* IT Services */}
          <div className="col-md-4">
            <div className="glass-card p-4 hover-lift">
              {/* <div className="service-icon">⚙️</div> */}
              <h4>IT Services</h4>
              <p>
                Technology-driven services helping businesses build, scale, and
                modernize their digital ecosystem.
              </p>
              <ul>
                <li>Web & Application Development</li>
                <li>Digital Transformation</li>
                <li>Managed IT Support</li>
              </ul>
            </div>
          </div>

        </div>
      </motion.div>


        <div
          style={{
            background: "linear-gradient(90deg, #CFF4FF 0%, #FFFFFF 100%)",
            width: "100%",
            padding: "60px 0",
          }}
        >
          {/* Dark overlay */}
          <div style={{ width: "100%", height: "100%" }}>
            <div className="container text-center">
              <div className="row align-items-center">

                {/* LEFT PROFILE */}
                <div className="col-lg-4 col-md-12 text-center mb-4 mb-lg-0">
                  <img
                    src={img3}
                    alt="Managing Director"
                    style={{
                      width: "290px",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />

                  <h5 style={{ color: "#015670", marginTop: "15px", fontWeight: "600" }}>
                    Jayakrishnan J
                  </h5>

                  <p style={{ color: "#015670", marginBottom: "5px" }}>
                    Founder & CEO
                  </p>

                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#fff",
                      padding: "5px 15px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={HrifyLogo}
                      alt="HRIFY Logo"
                      style={{ height: "30px" }}
                    />
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-lg-8 col-md-12">
                  <h3 style={{ color: "#015670", fontWeight: "700" }}>VISION</h3>
                  <p style={{ color: "#015670", lineHeight: "1.8" }}>
                    Known for its innovative solutions and exceptional client service,
                    HRIFY Technologies sets the <br />standard in
                    <span style={{ color: "#015670" }}>
                      {" "}Talent Management, IT Services & IT Consulting{" "}
                    </span>
                    with its cutting-edge technologies and commitment to exceeding
                    customer expectations.
                  </p>

                  <h3 style={{ color: "#015670", fontWeight: "700", marginTop: "30px" }}>
                    MISSION
                  </h3>
                  <p style={{ color: "#015670", lineHeight: "1.8" }}>
                    Our goal is to connect with as many businesses as possible,
                    offering top-tier IT solutions <br />through a robust and expansive
                    network of skilled teams, all while ensuring client satisfaction
                    and fostering a culture of happiness among our employees.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="container py-5">
          <div className="row align-items-center"



          // style={{ borderBottom: "3px solid #000" }}



          >

            {/* Left Side - Image */}
            <div className="col-md-6 mb-3 mb-md-0">
              <img
                src={img4}
                alt="Guiding Vision"
                className="img-fluid"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
                }}
              />
            </div>

            {/* Right Side - Content */}
            <div className="col-md-6">
              <h2
                style={{ fontSize: "36px", fontWeight: "medium", justifyContent: "center", fontFamily: "'Outfit', sans-serif" }}
              >
                Guiding the Vision
              </h2>

              <h5 style={{ fontWeight: "600", color: "#015670", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>General Version (for personal profile or business):</h5>
              <p style={{ lineHeight: "1.7", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>"Passionate about delivering excellence, we strive to create meaningful experiences through innovation, dedication, and a deep understanding of our field."</p>

              <h5 style={{ fontWeight: "600", color: "#015670", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>Corporate Version:</h5>
              <p style={{ lineHeight: "1.7", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>"We are committed to providing reliable and cutting-edge solutions that drive growth and add value to our clients' businesses."</p>

              <h5 style={{ fontWeight: "600", color: "#015670", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>Creative Professional Version:</h5>
              <p style={{ lineHeight: "1.7", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>"Driven by creativity and inspired by purpose, I bring ideas to life through storytelling, design, and a constant desire to learn."</p>


            </div>

          </div>
        </div>


        <div className="container mt-4 mb-5 text-center">
          <h2 style={{ color: "#015670", fontFamily: "'Outfit', sans-serif", fontSize: "36px" }}><b>Let’s Bring Your Vision to Life</b></h2>
          <p style={{ color: "#949494", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>Your journey toward innovation and success starts here. Connect with us to explore how we can collaborate to achieve your goals.</p>

        </div>

        <Form />
      </div>
    </>
  );
}

export default About;
