import Form from "../Components/Form"
import img1 from "../assets/Internship/img1.png"
import img2 from "../assets/Internship/img2.png"
import img3 from "../assets/Internship/img3.png"
import img4 from "../assets/Internship/img4.png"
import img5 from "../assets/Internship/img5.png"


function Internship() {


    return (


        <>

             
        <div className="container-fluid p-0">
  <div
    style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    }}
  >
    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    ></div>

    {/* Hero Content */}
    <div className="container" style={{ position: "relative", color: "#fff" }}>
      <h1 style={{ fontSize: "75px", marginBottom: "10px" }}>
        <b>Internship</b>
      </h1>

      <h3 style={{ fontSize: "32px", fontWeight: "400", marginTop: 0 }}>
        Seamless Staffing Limitless Growth
      </h3>

      <p style={{ fontSize: "50px" }}>→</p>
    </div>
  </div>
</div>




            <div className="container mt-4 mb-5 text-center">
                <h2 style={{ color: "black", fontSize:"40px", fontFamily:"poppins" }}><b>HRIFY Internship Program</b></h2>
                <p style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px" }}>At HRIFY, our internship program is designed to unlock the true potential of students and young professionals by providing a real-world learning experience. It is a structured, hands-on training program that serves as a gateway to understanding industry practices while enhancing individual capabilities. We nurture talent, spark innovation, and help interns discover their strengths. </p>

            </div>


            <div className="container py-5">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>HRIFY Internship Program</h3>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>
                            At HRIFY, our internship program is designed to unlock the true potential
                            of students and young professionals by providing a real-world learning
                            experience. It is a structured, hands-on training program that serves as
                            a gateway to understanding industry practices while enhancing individual
                            capabilities. We nurture talent, spark innovation, and help interns
                            discover their strengths.
                        </p>

                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Program Highlights</h3>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>
                            <strong>Live Projects:</strong> Interns work on real-time projects in tech,
                            design, marketing, or operations, gaining practical exposure.
                        </p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>
                            <strong>Mentorship:</strong> One-on-one sessions with experienced
                            professionals to guide and refine skills.
                        </p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>
                            <strong>Performance Reviews:</strong> Weekly feedback and assessments to
                            track improvement and readiness.
                        </p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>
                            <strong>Certifications:</strong> Recognized certification of internship
                            completion with individual performance insights.
                        </p>

                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Domains Offered</h3>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Frontend Development (ReactJS, HTML/CSS/JS, Bootstrap)</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Backend Development (Node.js, Express, MongoDB)</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>UI/UX Design (Figma, Adobe XD)</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Data Analytics (Python, Power BI, Excel)</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Digital Marketing (SEO, Google Ads, Social Media Strategy)</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>HR and Talent Acquisition (Recruitment tools, HR Analytics)</p>
                    </div>

                    {/* RIGHT IMAGE */}
                    {/* RIGHT IMAGE */}
                    <div className="col-lg-5 col-md-12 text-center">
                        <img
                            src={img2}
                            alt="HRIFY Internship Program"
                            className="img-fluid rounded"
                            style={{
                                maxWidth: "75%",   // 👈 image size reduce
                                height: "auto"
                            }}
                        />
                    </div>


                </div>
            </div>


            <div className="container py-5">
                <div className="row align-items-center">


                    {/* RIGHT CONTENT - col-8 */}
                    <div className="col-lg-8 col-md-12">
                        <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Key Benefits</h3>

                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Work from home flexibility with structured timelines</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Capstone projects that can be added to your resume or GitHub</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Stipends offered for top-performing interns</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Chance to receive PPO (Pre-Placement Offer) from HRIFY or partner companies</p>
                        <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Access to career-building webinars and expert-led workshops</p>
                    </div>



                    {/* LEFT IMAGE - col-4 */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                        <img
                            src={img3}
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



            <div className="container-fluid p-0">
                <img
                    src={img4}
                    alt="Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
                    }}
                />
            </div>


            <div className="container mt-4 mb-5 text-center">
                <h3 className="mt-5" style={{ color: "#015670", fontFamily:"poppins", fontSize:"30px", fontWeight:"bold" }}><b>Success Stories</b></h3>
                <p  style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Many of our interns have transitioned into full-time roles at HRIFY or leading startups and MNCs. For example, Priya Kumar joined as a Data Analytics intern and is now working with a global analytics firm. Arjun Menon, a frontend intern, was hired by an ed-tech startup after showcasing his React-based portfolio built during his time here. Their journeys started at HRIFY, and yours can too. Ready to kickstart your career with real-world experience? Apply now to join HRIFY's Internship Program and take your skills to the next level. </p>

            </div>{/*  */}



            <div className="container-fluid p-0">
                <img
                    src={img5}
                    alt="Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
                    }}
                />
            </div>


            <div className="container mt-5 mb-5 text-center">
                <h2 style={{ color: "#015670", fontFamily:"poppins", fontSize:"36px" }}><b>Let’s Bring Your Vision to Life</b></h2>
                <p style={{ color: "#949494", fontFamily:"poppins", fontSize:"20px" }}>Your journey toward innovation and success starts here. Connect with us to explore how we can collaborate to achieve your goals.</p>
            </div>


        <Form/>


        </>


    )
}



export default Internship