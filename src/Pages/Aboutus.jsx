import img1 from "../assets/About/img1.png";
import video1 from "../assets/About/video1.mp4";
import whoWeAreImg from "../assets/About/img2.png";
import bgimg1 from "../assets/About/bgimg1.png";
import img3 from "../assets/About/img3.png";
import img4 from "../assets/About/img4.png";
import HrifyLogo from "../assets/Navbar/logo.png";
import Form from "../Components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from "../assets/Services/logo1.png";
import logo2 from "../assets/Services/logo2.png";
import logo3 from "../assets/Services/logo3.png";
import logo4 from "../assets/Services/logo4.png";
import logo5 from "../assets/Services/logo5.png";
import logo6 from "../assets/Services/logo6.png";


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

  {/* Talent Management */}
  <div className="col-md-6">
    <div className="glass-card p-4 hover-lift">
      <h4>Talent Management</h4>
      <p>
        Strategic talent solutions designed to attract, develop, and retain
        high-performing professionals across industries.
      </p>

      <ul>
        <li>Contract & Permanent Hiring</li>
        <li>Contract-to-Hire</li>
        <li>On-demand Workforce</li>
        <li>Leadership & Executive Hiring</li>
        <li>Campus Recruitment Programs</li>
        <li>Employee Training & Development</li>
        <li>Talent Pipeline Building</li>
      </ul>
    </div>
  </div>

  {/* IT Services */}
  <div className="col-md-6">
    <div className="glass-card p-4 hover-lift">
      <h4>IT Services</h4>
      <p>
        Technology-driven services helping businesses build, scale, and
        modernize their digital ecosystem.
      </p>

      <ul>
        <li>Design & Development</li>
        <li>Business Solutions</li>
        <li>Networking Solutions</li>
        <li>Cybersecurity</li>
        <li>Blockchain</li>
        <li>Enterprise</li>
        <li>AI & ML</li>
        <li>Managed Services</li>
        <li>Quality Engineering</li>
      </ul>
    </div>
  </div>

</div>
      </motion.div>


    {/* ================= VISION & MISSION SECTION ================= */}







    
<div
  style={{
    background: "linear-gradient(90deg, #CFF4FF 0%, #FFFFFF 100%)",
    width: "100%",
    padding: "70px 0",
  }}
>
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT PROFILE */}
      <div className="col-lg-4 col-md-12 text-center mb-4 mb-lg-0">
        <img
          src={img3}
          alt="Founder & CEO"
          style={{
            width: "280px",
            // borderRadius: "20px",
            // boxShadow: "0 12px 30px rgba(0,0,0,0.12)"
          }}
        />

        <h5 className="mt-3 fw-semibold" style={{ color: "#015670" }}>
          Jayakrishnan J
        </h5>

        <p style={{ color: "#015670", marginBottom: "8px" }}>
          Founder & CEO
        </p>

        <div
          style={{
            background: "#fff",
            padding: "6px 16px",
            borderRadius: "6px",
            display: "inline-block",
          }}
        >
          <img src={HrifyLogo} alt="HRIFY" style={{ height: "28px" }} />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-8 col-md-12 ps-lg-5">

        {/* VISION */}
        <h3   className="fw-bold mb-3 text-center"
 style={{ color: "#015670"  }}>
          VISION
        </h3>

        <p style={{     color: "#000000"   // black color
, lineHeight: "1.9", fontSize: "17px" }}>
          Known for its innovative solutions and exceptional client service,
          HRIFY Technologies sets the standard in{" "}
          <strong>Talent Management, IT Services & IT Consulting </strong>
            through cutting-edge technologies and a strong commitment to
          exceeding customer expectations.
        </p>

        {/* MISSION */}
        <h3
  className="fw-bold mb-3 text-center"
          style={{ color: "#015670" }}
        >
          MISSION
        </h3>

        <p style={{    color: "#000000",    lineHeight: "1.9", fontSize: "17px" }}>
          Our mission is to partner with businesses across industries by
          delivering reliable IT solutions through a strong network of skilled
          teams, while ensuring client satisfaction and fostering a positive,
          people-first work culture.
        </p>

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


{/* ================= CLIENTS SECTION ================= */}
<section className="clients py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <h2 className="gradient-text text-center mb-5" style={{color: "#00566F", fontFamily: "'Outfit', sans-serif", fontSize: "36px" }}>
      <b>Trusted By Our Clients</b>
    </h2>
    
    <div className="logo-track" style={{ overflow: "hidden", width: "100%" }}>
      <div className="logo-track-inner" style={{ 
        display: "flex", 
        width: "max-content", 
        animation: "scroll 25s linear infinite",
        gap: "60px"
      }}>
        {/* First set of logos */}
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo1} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo2} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo3} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo4} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo5} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
             <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo6} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        
        {/* Duplicate set of logos for seamless looping */}
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo1} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo2} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo3} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo4} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
        <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo5} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>
     <div className="logo-item" style={{ 
          flexShrink: 0, 
          height: "70px", 
          display: "flex", 
          alignItems: "center",
          transition: "transform 0.3s ease"
        }}>
          <img src={logo6} alt="client" style={{ height: "70px", objectFit: "contain" }} />
        </div>


      </div>
    </div>
  </div>

  <style>
    {`
      .logo-track:hover .logo-track-inner {
        animation-play-state: paused;
      }

      .logo-item:hover {
        transform: scale(1.1);
      }

      @keyframes scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      @media (max-width: 768px) {
        .logo-track-inner {
          gap: 40px;
        }
        .logo-item img {
          height: 50px;
        }
      }

      @media (max-width: 480px) {
        .logo-track-inner {
          gap: 30px;
        }
        .logo-item img {
          height: 40px;
        }
      }
    `}
  </style>
</section>



        <div className="container mt-4 mb-2 text-center">
          <h2 style={{ color: "#015670", fontFamily: "'Outfit', sans-serif", fontSize: "36px" }}><b>Let’s Bring Your Vision to Life</b></h2>
          <p style={{ color: "#949494", fontFamily: "'Outfit', sans-serif", fontSize: "20px" }}>Your journey toward innovation and success starts here. Connect with us to explore how we can collaborate to achieve your goals.</p>
        </div>
        <Form />
      </div>
    </>
  );
}

export default About;
