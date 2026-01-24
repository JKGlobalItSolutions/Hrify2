import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import video1 from "../assets/Home/hero-video.mp4";
import img2 from "../assets/Home/img2.png";
import img3 from "../assets/Home/img3.png";
import img4 from "../assets/Home/img4.png";

function Home() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
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

              {/* small scroll space only */}
              <div style={{ height: "40vh" }}></div>
            </div>
          </div>
        </div>
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

                Our specialized digital services division, Hrifty Digital, delivers
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
                Staff & Talent Management
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
