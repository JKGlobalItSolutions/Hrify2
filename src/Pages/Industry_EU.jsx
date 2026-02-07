import img9 from "../assets/Industries/img9.png";
import EUimg1 from "../assets/Industries/EUimg1.png";



function Industry_EU() {






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
            backgroundImage: `url(${EUimg1})`,
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
              Energy and Utilities
            </h1>

            <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
                  Delivering workforce solutions that support reliable energy generation, sustainable infrastructure, and resilient utility operations.
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






      <div className="container-fluid p-2 mt-3 text-center" >
        <h1 className="mb-2" style={{ fontFamily: "poppins", fontSize: "40px" }}><b>Energy and Utilities</b></h1>
        <p style={{ color: "#015670", fontFamily: "poppins", fontSize: "18px" }}>Energy and Utilities refers to the industries responsible for the generation, transmission, distribution, and management of essential resources such as electricity, natural gas, water, and renewable energy. This sector includes traditional energy sources like fossil fuels, as well as renewable energy innovations such as solar, wind, and hydroelectric power. Utilities manage infrastructure, ensure supply reliability, and support energy efficiency, sustainability, and regulatory compliance. With increasing emphasis on clean energy, the industry is evolving to address environmental challenges and meet growing energy demands while transitioning to more sustainable and efficient solutions.</p>
      </div>


      <div className="container py-5">
        <div className="row align-items-center">

          {/* RIGHT CONTENT - col-8 */}
          <div className="col-lg-8 col-md-12">
            <h3 style={{ color: "#015670", fontFamily: "poppins", fontSize: "18px", fontWeight: "bold" }}>Energy Generation</h3>
            <p style={{ lineHeight: "1.7", fontFamily: "poppins", fontSize: "18px" }}>
              We support energy generation initiatives by providing skilled manpower across conventional and renewable energy sectors. Our staffing solutions help power plants, solar and wind energy projects, and utility providers build efficient teams for design, installation, operations, and maintenance. By delivering technically qualified professionals, we ensure reliable energy production and operational excellence.. </p>

            <h3 style={{ color: "#015670", fontFamily: "poppins", fontSize: "18px", fontWeight: "bold" }}>Sustainable Solutions  </h3>
            <p style={{ lineHeight: "1.7", fontFamily: "poppins", fontSize: "18px" }}>Our sustainable solutions focus on supporting clean and renewable energy initiatives that promote environmental responsibility. We help organizations recruit talent skilled in solar, wind, hydro, and energy-efficient technologies. By aligning workforce strategies with sustainability goals, we enable businesses to reduce carbon footprint and transition toward a greener energy future. </p>

            <h3 style={{ color: "#015670", fontFamily: "poppins", fontSize: "18px", fontWeight: "bold" }}>Infrastructure Management  </h3>
            <p style={{ lineHeight: "1.7", fontFamily: "poppins", fontSize: "18px" }}>We provide workforce support for effective energy infrastructure planning, development, and management. Our staffing services cover grid operations, transmission and distribution systems, asset maintenance, and project management. By supplying experienced professionals, we help organizations maintain infrastructure reliability, minimize downtime, and optimize performance. </p>

            <h3 style={{ color: "#015670", fontFamily: "poppins", fontSize: "18px", fontWeight: "bold" }}>Regulatory Compliance </h3>
            <p style={{ lineHeight: "1.7", fontFamily: "poppins", fontSize: "18px" }}>We assist energy organizations in meeting regulatory and safety standards by providing professionals experienced in compliance, quality assurance, and risk management. Our staffing solutions support adherence to industry regulations, environmental norms, and safety guidelines. By ensuring compliance-ready manpower, we help organizations operate responsibly and avoid operational risks.  </p>
          </div>




          {/* LEFT IMAGE - col-4 */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src={img9}
              alt="Flexible Staffing"
              style={{
                width: "100%",
                maxWidth: "300px",   // optional – neat center look
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
export default Industry_EU