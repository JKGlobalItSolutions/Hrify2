import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import img1 from "../assets/Home/img1.png"
import img2 from "../assets/Home/img2.png"
import img3 from "../assets/Home/img3.png"
import img4 from "../assets/Home/img4.png"

function Home() {
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
                                  marginTop: "clamp(100px, 65vh, 3000px)",
                                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                                  backdropFilter: "blur(20px)",
                                  WebkitBackdropFilter: "blur(10px)",
                                  padding: "2rem",
                                  color: "#fff",
                              }}
                          >
                              <div className="container">
                                  <h1 className="mb-3 text-center" style={{fontSize:"75px"}}>
                                      <b>Leading the way forward</b>
                                  </h1>
      
                                  
                              </div>
                          </div>
                      </div>
                  </div>





      <div className="mb-5">
        <div
          style={{
            backgroundColor: "#0080A7",
            display: "inline-block",
            padding: "10px 25px",
            // borderRadius: "0px 8px 8px 0px"
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              margin: 0,
              color: "#fff",
              fontSize: "50px"
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
                className="fw-bold mb-3" // Bootstrap for bold + margin-bottom
                style={{
                  background: "linear-gradient(to right, #015670, #0081A7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Poppins', sans-serif"
                }}
              > 
                Your Platform for Success
              </h2>


              <p
                style={{
                  color: "#000",

                  lineHeight: "1.7",
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                HRIFY is a leading business and digital consulting firm, helping organizations overcome complex challenges and unlock new growth opportunities. With a future-focused approach, we empower businesses across the globe by delivering innovative strategies, smart digital solutions, <br/> and sustainable success platforms.
              </p>
            </div>
          </div>
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


      <div className="container-fluid py-4 mb-5">
  <div className="container-fluid">
    <div className="row g-4">

      {/* Image 1 */}
      <div className="col-md-4">
        <div
          style={{
            // border: "1px solid #e0e0e0",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={img2}
            alt="Image 1"
            className="img-fluid"
            style={{
              width: "90%",
              display: "block", // 👈 remove inline-block space
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Image 2 (highlighted border) */}
      <div className="col-md-4">
        <div
          style={{
            // border: "3px solid #0d6efd",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={img3}
            alt="Image 2"
            className="img-fluid"
            style={{
              width: "90%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Image 3 */}
      <div className="col-md-4">
        <div
          style={{
            // border: "1px solid #e0e0e0",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={img4}
            alt="Image 3"
            className="img-fluid"
            style={{
              width: "90%",
              display: "block",
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
        <div className="container-fluid text-center">
          <h2
            className="fw-bold mb-4"
            style={{ color: "#ffffff", fontSize:"60px" }}
          >
            Reinventing the Future
          </h2>

          <p
            className="mx-auto"
            style={{
              color: "#ffffff",
              maxWidth: "1300px",
              fontSize: "30px",
              lineHeight: "1.7",
            }}
          >
            <b>Reinventing the Future by driving innovation, embracing digital
            transformation, and<br/> delivering forward-thinking solutions that empower
            businesses to grow,<br/> adapt, and succeed in a rapidly evolving world.</b>
          </p>
        </div>
      </div>





    </>
  );
}

export default Home;
