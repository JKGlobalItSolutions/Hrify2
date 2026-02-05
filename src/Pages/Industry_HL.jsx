import img8 from "../assets/Industries/img8.png";
import HLimg1 from "../assets/Industries/HLimg1.png";




function Industry_HL() {





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
          backgroundImage: `url(${HLimg1})`,
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
          <h1 style={{ fontSize: "50px", fontWeight: "700" }}>
           Healthcare and Life Sciences
          </h1>

          {/* <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
           Nuturing success with talent that grows beside you
          </h3> */}

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
                <h1 className="mb-2" style={{fontFamily:"poppins", fontSize:"40px"}}><b>Healthcare and Life Sciences</b></h1>
                <p style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px" }}>Healthcare and Life Sciences refer to industries focused on improving human health and well-being through the development, delivery, and management of medical services, products, and research. This sector encompasses healthcare providers, pharmaceutical companies, biotechnology firms, medical device manufacturers, and life science researchers. It aims to advance medical knowledge, develop innovative treatments, and improve patient care while addressing global health challenges through cutting-edge technology, data-driven insights, and scientific breakthroughs.</p>
            </div>


            <div className="container py-5">
                <div className="row align-items-center">




                    {/* LEFT IMAGE - col-4 */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                        <img
                            src={img8}
                            alt="Flexible Staffing"
                            style={{
                                width: "100%",
                                maxWidth: "300px",   // optional – neat center look
                                height: "auto",
                                borderRadius: "8px"
                            }}
                        />
                    </div>

                    {/* RIGHT CONTENT - col-8 */}
                    <div className="col-lg-8 col-md-12">
                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Medical Innovation</h3>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>
                            Driving the future of healthcare through cutting-edge research, revolutionary therapies, and groundbreaking technologies. Our focus is on enhancing patient care, improving outcomes, and transforming lives with innovative medical solutions tailored for tomorrow’s challenges. </p>

                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Healthcare Delivery​ </h3>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Transforming access to high-quality healthcare through innovative hospitals, specialized clinics, comprehensive telemedicine services, and personalized treatment plans. Our mission is to ensure patient-centered care that is accessible, efficient, and effective for every individual. </p>

                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Pharmaceutical and Biotechnology </h3>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Leading advancements in drug discovery, genetic engineering, and biotechnological innovation. Our focus lies in developing life-saving medicines, pioneering therapies, and preventive healthcare solutions that address global health challenges and improve quality of life.</p>

                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Data and Technology Integration​ </h3>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Harnessing the power of Artificial Intelligence (AI), Internet of Things (IoT), and Big Data analytics to revolutionize healthcare operations. Our intelligent systems enable real-time decision-making, streamline clinical workflows, and enhance patient outcomes through data-driven insights.  </p>
                    </div>
                </div>
            </div>







        </>
    )
}
export default Industry_HL