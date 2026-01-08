import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import img1 from "../assets/Home/img1.png"
import img2 from "../assets/Home/img2.png"
import img3 from "../assets/Home/img3.png"
import img4 from "../assets/Home/img4.png"

function Home() {
  return (
    <>



      <div className="container mt-5 mb-5">
        <div
          className="d-flex justify-content-center align-items-end"
          style={{
            position: "relative",
            paddingBottom: "80px",
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
              marginBottom: "80px",
              marginTop: "clamp(60px, 12vh, 120px)",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              padding: "2rem",
              color: "#fff",
            }}
          >
            <div className="container text-center">
              <h1 className="mb-3">
                <b>Leading the way forward</b>
              </h1>
            </div>
          </div>
        </div>
      </div>



      <div className="mb-5">
        <div
          style={{
            backgroundColor: "rgb(10, 166, 200)",
            display: "inline-block",
            padding: "10px 25px",
            borderRadius: "0px 8px 8px 0px"
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              margin: 0,
              color: "#fff"
            }}
          >
            What We Do!
          </h2>
        </div>
      </div>




      <div
      className='mb-5'
        style={{
          background: "linear-gradient(90deg, #CFF4FF 0%, #FFFFFF 100%)",
          padding: "60px 0"
        }}
      >
        <div className="container ">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h2
                style={{
                  color: "#015670",
                  fontWeight: "700",
                  marginBottom: "20px"
                }}
              >
                Your Platform for Success
              </h2>

              <p
                style={{
                  color: "#000",
                  fontSize: "18px",
                  lineHeight: "1.7",
                  margin: 0
                }}
              >
                HRIFY is a leading business and digital consulting firm, helping organizations overcome complex challenges and unlock new growth opportunities. With a future-focused approach, we empower businesses across the globe by delivering innovative strategies, smart digital solutions, and sustainable success platforms.
              </p>
            </div>
          </div>
        </div>
      </div>



       <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
      <div className="container py-4">

        {/* Digital Technology Services */}
        <div
          style={{
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "20px",
            marginBottom: "30px",
          }}
        >
          <h4
            style={{
              fontWeight: "700",
              // textDecoration: "underline",
              marginBottom: "15px",
            }}
          >
            Digital Technology Services
          </h4>

          <p style={{ fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
            Our specialized digital services division, Hrifty Digital, delivers
            exceptional digital solutions that empower clients to transform and
            revolutionize their businesses.
          </p>
        </div>

        {/* Staff & Talent Management */}
        <div
          style={{
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "20px",
            marginBottom: "30px",
          }}
        >
          <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>
            Staff & Talent Management
          </h4>

          <p style={{ fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
            We are a digital consulting company that believes in
            technology-driven transformation to create meaningful and lasting
            impact. Our expertise enables clients to identify, recruit, and
            place specialized talent, ensuring success today while building a
            strong foundation for the future.
          </p>
        </div>

        {/* Business Process Management */}
        <div
          style={{
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "20px",
          }}
        >
          <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>
            Business Process Management
          </h4>

          <p style={{ fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
            We create robust digital business frameworks through continuous
            analysis, testing, iteration, and performance monitoring to drive
            long-term success and growth. Our business consulting services go
            beyond meeting client needs by delivering a clear digital roadmap
            that enables confident, data-driven decisions.
          </p>
        </div>

      </div>
    </div>


    <div className="container-fluid py-4">
      <div className="container">
        <div className="row g-4">

          {/* Image 1 */}
          <div className="col-md-4">
            <div
              style={{
                border: "1px solid #e0e0e0",
                overflow: "hidden",
              }}
            >
              <img
                src={img2}
                alt="Image 1"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Image 2 (highlighted border like sample) */}
          <div className="col-md-4">
            <div
              style={{
                border: "3px solid #0d6efd",
                overflow: "hidden",
              }}
            >
              <img
                src={img3}
                alt="Image 2"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="col-md-4">
            <div
              style={{
                border: "1px solid #e0e0e0",
                overflow: "hidden",
              }}
            >
              <img
                src={img4}
                alt="Image 3"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>



    <div
  className="container-fluid py-5"
  style={{
    background: "linear-gradient(to bottom, #0081A7, #003241)",
  }}
>
  <div className="container text-center">
    <h2
      className="fw-bold mb-3"
      style={{ color: "#ffffff" }}
    >
      Reinventing the Future
    </h2>

    <p
      className="mx-auto"
      style={{
        color: "#ffffff",
        maxWidth: "900px",
        fontSize: "16px",
        lineHeight: "1.7",
      }}
    >
      Reinventing the Future by driving innovation, embracing digital
      transformation, and delivering forward-thinking solutions that empower
      businesses to grow, adapt, and succeed in a rapidly evolving world.
    </p>
  </div>
</div>





    </>
  );
}

export default Home;
