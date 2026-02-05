
import Form from "../Components/Form"
import video1 from "../assets/Talent_management/hero-video.mp4"
import img1 from "../assets/Talent_management/img1.png"
import img2 from "../assets/Talent_management/img2.jpeg"
import img3 from "../assets/Talent_management/img3.jpeg"
import img4 from "../assets/Talent_management/img4.jpeg"
import img5 from "../assets/Talent_management/img5.png"
import img6 from "../assets/Talent_management/img6.jpeg"
import img7 from "../assets/Talent_management/img7.png"


function Talent_management() {






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
          <h1 style={{ fontSize: "75px", fontWeight: "700" }}>
           Talent Management
          </h1>

          <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
           Nuturing success with talent that grows beside you
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





            <div style={{ backgroundColor: "#fff" }}>


                <div className="container-fluid py-5">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 p-4">

                            <h3 className="mb-3" style={{ color: "#015670", fontWeight: "bold", fontSize: "24px", fontFamily: "poppins" }}>Innovative Talent Strategies for Future-Ready Organizations</h3>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>Talent Management is the strategic process of sourcing, developing, and retaining exceptional professionals to meet your organization’s workforce demands, with a specialized focus on the IT sector. Our services range from Contract Staffing and Placement to Contract-to-Hire, Permanent Staffing, Supplier Rationalization, and Hire, Train & Deploy programs. By aligning the right talent with the right opportunities, we help businesses optimize their workforce strategies. This fosters efficiency, boosts productivity, and supports long-term growth, empowering organizations to thrive in today’s competitive IT landscape.</p>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>Our approach is designed to adapt to the unique needs of each organization, whether you're a fast-growing startup or an established enterprise. We leverage data-driven insights and market intelligence to ensure a tailored strategy that not only attracts top-tier talent but also retains them through continuous engagement and development initiatives.</p>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>With a dedicated focus on building future-ready teams, we empower businesses to stay agile in an ever-evolving digital landscape. Our comprehensive talent solutions enable organizations to scale quickly, innovate faster, and maintain a competitive edge by having the right people in the right roles at the right time. </p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-lg-5 col-md-12 ">
                            <img
                                src={img2}
                                alt="Staffing Solutions"
                                className="img-fluid rounded"
                                style={{ maxWidth: "100%" }}
                            />
                        </div>

                    </div>
                </div>



                <div className="container-fluid py-5">
                    <div className="row align-items-center">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-5 col-md-12 text-center mb-4 mb-lg-0">
                            <img
                                src={img3}
                                alt="Contract Staffing and Placement"
                                className="img-fluid rounded"
                                style={{ maxWidth: "100%" }}
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-7 col-md-12 p-4">

                            <h3 className="mb-3" style={{ color: "#015670", fontWeight: "bold", fontSize: "24px", fontFamily: "poppins" }}>
                                Contract Staffing and Placement
                            </h3>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>Contract Staffing and Placement connects businesses in the IT sector with skilled professionals to meet their specific project and operational needs. Our tailored services ensure the right tech talent is matched with the right opportunities, enabling organizations to build a dynamic and effective workforce. Whether it's short-term assignments or specialized roles, we deliver the expertise you need to drive innovation and achieve exceptional results in the ever-evolving IT landscape. Partner with us to accelerate your business success.</p>
                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>Our recruiters have made screening and hiring for short-term contracts easier for our clients. Our contract services help our clients to meet their short-term staffing requirements across industries. Our devoted team collaborates closely with our clients to satisfy their personnel requirements for forthcoming projects and seasonal changes. Hiring personnel on a contract basis enables these businesses to maintain staffing numbers.</p>
                        </div>

                    </div>
                </div>




                <div className="container-fluid py-5">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 p-4">
                            <h3 className="mb-3" style={{ color: "#015670", fontWeight: "bold", fontSize: "24px", fontFamily: "poppins" }}>Permanent Staffing</h3>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>Our permanent staffing solutions for the IT sector focus on sourcing top-tier talent that aligns seamlessly with your organization’s culture, technical requirements, and long-term objectives. Through a rigorous screening process and a personalized approach, we ensure every IT professional we place is a strategic fit. Whether you need software developers, network engineers, or IT consultants, we help you build a stable and skilled workforce that drives innovation, sustainable growth, and success for your business.</p>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>To guarantee we supply the ideal individual, we take the time to study our client's business requirements, industry skill sets, workforce market, and other pertinent facts about the position. Our recruitment specialists use cutting-edge search processes to locate, screen, and qualify prospects. We save our clients time and money by recruiting more efficient candidates that have the correct talent for the job and match the company's culture, mindset, and tenure for long-term success.</p>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-lg-5 col-md-12 text-center">
                            <img
                                src={img4}
                                alt="Staffing Solutions"
                                className="img-fluid rounded"
                            />
                        </div>

                    </div>
                </div>



{/* 
                <div className="container py-5">
                    <div className="row align-items-center">

                        
                        <div className="col-lg-5 col-md-12 text-center mb-4 mb-lg-0">
                            <img
                                src={img5}
                                alt="Contract Staffing and Placement"
                                className="img-fluid rounded"
                                style={{ maxWidth: "70%" }}
                            />
                        </div>

                        
                        <div className="col-lg-7 col-md-12">

                            <h3 className="mb-3" style={{ color: "#015670", fontWeight: "bold", fontSize: "24px", fontFamily: "poppins" }}>
                                Supplier Rationalization
                            </h3>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>Extensive experience in the IT sector, our expertise in supplier rationalization is backed by a proven track record of successful collaborations with industry leaders, including complex, multibillion-dollar clients. Our global presence and strong reputation enable us to deliver cost savings and minimize disruptions, regardless of location. We focus on managing tail spending, achieving substantial cost efficiencies within existing contractor agreements, and reducing both direct and indirect supplier layers. Specializing in customized contract negotiations, compliance, governance, and support for geographical expansion, we help IT businesses streamline their operations and optimize vendor relationships for sustainable growth.</p>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>What actually distinguishes our proprietary Preferred Partner program, which is supported by strong governance, large financial resources, and a specialized legal and compliance staff critical to the successful implementation of the Supplier Rationalization Initiative. As a registered Minority Business Enterprise (MBE Supplier), we are dedicated to increasing our clients' diversity spending, while our comprehensive support enables them to expand into new territories. JK Global IT Solutions acts as a trusted intermediary between clients and providers, assuring compliance in a variety of operational situations. Geographical expansion. </p>


                        </div>

                    </div>
                </div> */}


                <div className="container py-5">
                    <div className="row align-items-center">





                         {/* RIGHT IMAGE */}
                        <div className="col-lg-5 col-md-12 text-center">
                            <img
                                src={img6}
                                alt="Staffing Solutions"
                                className="img-fluid rounded"
                                style={{ maxWidth: "100%" }}
                            />
                        </div>

                        {/* LEFT CONTENT */}
                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 p-4">

                            <h3 className="mb-3" style={{ color: "#015670", fontWeight: "bold", fontSize: "24px", fontFamily: "poppins" }}>Hire, Train & Deploy</h3>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}> We offer a comprehensive range of HTD (Hire, Train, and Deploy) solutions tailored to the unique demands of the IT Industry, redefining talent acquisition, development, and deployment. Whether for small businesses or multinational corporations, our services assist clients in sourcing, training, and placing the right personnel. Our customized training programs, including accent-neutral communication, technical expertise, and cultural alignment, ensure a consistent pipeline of talent for entry-level to specialized IT roles. Leveraging diverse markets and global talent pools, we enable organizations to build a workforce capable of serving a worldwide client base. From rigorous background checks to seamless payroll management, our solutions tackle operational complexities with precision, providing a hassle-free and efficient experience for IT-driven businesses.</p>

                            <p style={{ fontSize: "18px", fontFamily: "poppins", textAlign: "justify" }}>Our strong relationships with prestigious College’s & University , as well as expert trainers from industry leaders such as leading It Company, allow us to leverage our technology curriculum to provide our clients' workforce with cutting-edge technical skills and assist them in identifying, reporting, resolving issues, managing customer interactions, and more.</p>

                        </div>

                       

                    </div>
                </div>



                <div className="container mt-5">
                    <div
                        className="d-flex justify-content-center align-items-start"
                        style={{
                            position: "relative",
                            width: "100%",
                            minHeight: "100vh",
                            margin: 0,
                            padding: 0,
                            backgroundImage: `url(${img7})`,
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
                                marginTop: "clamp(60px, 12vh, 120px)",

                                // backdropFilter: "blur(10px)",
                                // WebkitBackdropFilter: "blur(10px)",
                                padding: "2rem",
                                color: "#fff",
                            }}
                        >
                            <div className="container p-3" >
                                <h1 className="mb-3 text-center text-md-start">
                                    Workforce Strategy
                                </h1>

                                <p
                                    className="text-center text-md-start"
                                    style={{
                                        fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font
                                    }}
                                >
                                    Talent Management is the strategic process of attracting, developing, motivating, and retaining high-performing employees. It ensures the right people are in the right roles, aligned with business goals. Effective talent management enhances productivity, builds leadership pipelines, and fosters a culture of continuous learning and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-4 mb-2 text-center">
                    <h2 style={{ color: "#015670" }}><b>Unlock Your Business Potential with the Right Talent</b></h2>
                    <p style={{ color: "#000000" }}>Our Talent Management services provide tailored solutions to help you find and nurture the best talent</p>

                </div>


                <Form />

            </div>

        </>
    );
}


export default Talent_management
