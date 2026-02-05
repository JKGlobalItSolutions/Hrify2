import img1 from "../assets/About/img1.png";
import video1 from "../assets/About/video1.mp4";
import img2 from "../assets/About/img2.png";
import bgimg1 from "../assets/About/bgimg1.png";
import img3 from "../assets/About/img3.png";
import img4 from "../assets/About/img4.png";
import HrifyLogo from "../assets/Navbar/logo.png";
import Form from "../Components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

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




  return (
    <>
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










        <div
          className="s mt-5 p-3 mb-5 text-center"
          style={{
            // fontFamily: "'Redressed', sans-serif",
            lineHeight: "1.8",
            fontSize: "20px",
            fontWeight:"800",
            color: "#015670",
            backgroundColor: "#fff"
          }}
        >
          <p><b>
            Contract Staffing offers flexible staffing solutions for short-term or project-based requirements, providing access to skilled professionals exactly when you need them, while Permanent Placement connects you with top-tier talent for long-term roles to ensure the right fit for your organization’s growth, and Contract-to-Hire gives you a flexible hiring approach that allows you to evaluate talent on contract before transitioning them into permanent positions.</b>
          </p>
        </div>


        <div className="container py-5">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
              <h3 className="mb-3" style={{ fontSize: "24px", color: "#015670", fontWeight: "bold", fontFamily: "'Outfit', sans-serif" }}>Contract Staffing and Placement</h3>


              <p style={{ fontSize: "18px", fontWeight: "medium", fontFamily: "'Outfit', sans-serif" }}>
                Flexible staffing solutions to address short-term or project-based workforce requirements with skilled professionals.
                We provide end-to-end recruitment services to help businesses find and retain top talent for long-term, full-time roles.
                Our rigorous screening process ensures candidates are the right fit for your company culture and objectives.
                We specialize in sourcing senior-level executives and leadership talent to drive strategic growth and innovation within your organization.
                Our extensive network and targeted approach guarantee quality hires.
              </p>

              <h3 className="mb-3" style={{ fontSize: "24px", color: "#015670", fontWeight: "bold", fontFamily: "'Outfit', sans-serif" }}>Contract-to-Hire</h3>
              <p style={{ fontSize: "18px", fontWeight: "medium", fontFamily: "'Outfit', sans-serif" }}>
                Our Contract-to-Hire solutions offer flexibility for businesses to assess a candidate’s performance and cultural fit before making a permanent hiring decision.
                This approach minimizes hiring risks, ensures seamless transitions, and helps organizations secure top talent with confidence.
              </p>

              <h3 className="mb-3" style={{ fontSize: "24px", color: "#015670", fontWeight: "bold", fontFamily: "'Outfit', sans-serif" }}>Permanent Staffing</h3>
              <p style={{ fontSize: "18px", fontWeight: "medium", justifyContent: "center", fontFamily: "'Outfit', sans-serif" }}>
                We provide comprehensive recruitment services to help businesses find the right talent for long-term success.
                Our rigorous screening and selection process ensures that candidates not only possess the required skills but also align with your company’s culture and vision.
                With our expertise, you can build a strong, dedicated workforce that drives growth and stability.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-5 col-md-12 text-center">
              <img
                src={img2}
                alt="Staffing Solutions"
                className="img-fluid rounded"
              />
            </div>

          </div>
        </div>

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
