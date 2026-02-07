import img10 from "../assets/Industries/img11.png";
import BFimg1 from "../assets/Industries/BFimg1.png";



function Industry_BF() {







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



      {/* ================= HERO SECTION ================= */}
      <div className="container-fluid p-0">
      <div
        className="d-flex align-items-center"
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `url(${BFimg1})`,
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
              "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0))",
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
          <h1 className="mb-2" style={{ fontSize: "50px", fontWeight: "700" }}>
           Banking and Finance
          </h1>

          <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
           Delivering expert staffing and workforce solutions that support secure, scalable operations across banking, financial services, and fintech environments.
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






            <div className="container p-2 mt-4 text-center" >
                <h1 className="mb-2" style={{ fontFamily: "poppins", fontSize: "40px" }}><b>Banking and Finance</b></h1>
                <p style={{ color: "#015670", fontFamily: "poppins", fontSize: "20px", fontWeight: "800" }}><b>Strategic Blockchain and AI Solutions for Digital Transformation</b></p>
                <p style={{ fontFamily: "poppins", fontSize: "18px", fontWeight: "500" }}><b>Empowering Financial Institutions with the Right Talent</b></p>
                    <p style={{ fontFamily: "poppins", fontSize: "18px" }}>We specialize in providing highly skilled professionals for banking and finance sectors. From entry-level roles to senior management, our manpower solutions ensure that your organization has the right expertise to drive growth and maintain compliance.</p>
            </div>


            <div className="container py-5">
                <div className="">

                    {/* RIGHT CONTENT - col-8 */}
                    <div className=" col-md-12">
                        <h3 style={{ color: "#015670", fontFamily: "poppins", fontSize: "25px", fontWeight: "bold" }}>Our Services Include:</h3>
                        
                        <ul style={{ lineHeight: "3", fontFamily: "poppins", fontSize: "18px" }}>
                            <li>Staffing for Banks & NBFCs – Relationship Managers, Loan Officers, Back Office Executives, and more.</li>
                            <li>Finance & Accounting Professionals – Chartered Accountants, Financial Analysts, Auditors, and Account Managers.</li>
                            <li>Temporary & Permanent Placements – Flexible hiring solutions tailored to your operational needs.</li>
                            <li>Training & Skill Development – Ensuring candidates are industry-ready and updated with the latest regulations.</li>
                        </ul>
                    </div>




                    {/* LEFT IMAGE - col-4 */}
                    <div className="d-flex mt-5 mb-5 justify-content-center">
                        <img
                            src={img10}
                            alt="Flexible Staffing"
                            style={{
                                width: "100%",
                                // maxWidth: "300px",   // optional – neat center look
                                height: "auto",
                                borderRadius: "8px"
                            }}
                        />
                    </div>



                </div>
            </div>


        </>
    )


}
export default Industry_BF