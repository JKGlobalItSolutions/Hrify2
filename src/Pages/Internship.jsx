import img1 from "../assets/Internship/img1.png"
import img2 from "../assets/Internship/img2.png"
import img3 from "../assets/Internship/img3.png"
import img4 from "../assets/Internship/img4.png"
import img5 from "../assets/Internship/img5.png"


function Internship() {


    return (


        <>

            <div className="container mt-5 mb-4">
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
                            backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                    ></div>

                    {/* Glass effect content */}
                    <div
                        className="container-fluid"
                        style={{
                            position: "relative",
                            marginTop: "clamp(60px, 12vh, 120px)",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            padding: "2rem",
                            color: "#fff",
                        }}
                    >
                        <div className="container">
                            <h1 className="mb-3 text-center text-md-start">
                                Seamless Staffing Limitless Growth
                            </h1>

                            <p
                                className="text-center text-md-start"
                                style={{
                                    fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font
                                }}
                            >
                                "Unleashing potential through tailored staffing and orkforce Streamline your workforce strategies with our comprehensive Talent Management solutions. From staffing to career development, we ensure the right talent meets the right opportunities."  designed to transform your business and elevate success."
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mt-4 mb-5 text-center">
                <h2 style={{ color: "black" }}><b>HRIFY Internship Program</b></h2>
                <p style={{ color: "#015670" }}>At HRIFY, our internship program is designed to unlock the true potential of students and young professionals by providing a real-world learning experience. It is a structured, hands-on training program that serves as a gateway to understanding industry practices while enhancing individual capabilities. We nurture talent, spark innovation, and help interns discover their strengths. </p>

            </div>


            <div className="container py-5">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                        <h3 className="mb-3">HRIFY Internship Program</h3>
                        <p>
                            At HRIFY, our internship program is designed to unlock the true potential
                            of students and young professionals by providing a real-world learning
                            experience. It is a structured, hands-on training program that serves as
                            a gateway to understanding industry practices while enhancing individual
                            capabilities. We nurture talent, spark innovation, and help interns
                            discover their strengths.
                        </p>

                        <h4 className="mt-4">Program Highlights</h4>
                        <p>
                            <strong>Live Projects:</strong> Interns work on real-time projects in tech,
                            design, marketing, or operations, gaining practical exposure.
                        </p>
                        <p>
                            <strong>Mentorship:</strong> One-on-one sessions with experienced
                            professionals to guide and refine skills.
                        </p>
                        <p>
                            <strong>Performance Reviews:</strong> Weekly feedback and assessments to
                            track improvement and readiness.
                        </p>
                        <p>
                            <strong>Certifications:</strong> Recognized certification of internship
                            completion with individual performance insights.
                        </p>

                        <h4 className="mt-4">Domains Offered</h4>
                        <p>Frontend Development (ReactJS, HTML/CSS/JS, Bootstrap)</p>
                        <p>Backend Development (Node.js, Express, MongoDB)</p>
                        <p>UI/UX Design (Figma, Adobe XD)</p>
                        <p>Data Analytics (Python, Power BI, Excel)</p>
                        <p>Digital Marketing (SEO, Google Ads, Social Media Strategy)</p>
                        <p>HR and Talent Acquisition (Recruitment tools, HR Analytics)</p>
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
                        <h3 className="mb-3">Key Benefits</h3>

                        <p>Work from home flexibility with structured timelines</p>
                        <p>Capstone projects that can be added to your resume or GitHub</p>
                        <p>Stipends offered for top-performing interns</p>
                        <p>Chance to receive PPO (Pre-Placement Offer) from HRIFY or partner companies</p>
                        <p>Access to career-building webinars and expert-led workshops</p>






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


            <div className="container mt-4 mb-3 text-center">
                <h2 style={{ color: "#015670" }}><b>Success Stories</b></h2>
                <p style={{ color: "#949494" }}>Many of our interns have transitioned into full-time roles at HRIFY or leading startups and MNCs. For example, Priya Kumar joined as a Data Analytics intern and is now working with a global analytics firm. Arjun Menon, a frontend intern, was hired by an ed-tech startup after showcasing his React-based portfolio built during his time here. Their journeys started at HRIFY, and yours can too. Ready to kickstart your career with real-world experience? Apply now to join HRIFY's Internship Program and take your skills to the next level. </p>

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


            <div className="container mt-4 mb-5 text-center">
                <h2 style={{ color: "#015670" }}><b>Let’s Bring Your Vision to Life</b></h2>
                <p style={{ color: "#949494" }}>Your journey toward innovation and success starts here. Connect with us to explore how we can collaborate to achieve your goals.</p>

            </div>


            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}
            >
                <div
                    className="card p-4"
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.50)",
                    }}
                >
                    <h4 className="text-center mb-4">Submit Your Inquiry</h4>

                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Business Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your business email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">I am seeking</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="What are you seeking?"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">
                            Give us an overview of your expectations
                        </label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Describe your expectations"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn w-100"
                        style={{
                            backgroundColor: "#015670",
                            color: "#ffffff",
                            fontWeight: "500",
                        }}
                    >
                        Submit Inquiry
                    </button>
                </div>
            </div>


        </>


    )
}



export default Internship