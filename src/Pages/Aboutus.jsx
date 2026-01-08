import img1 from "../assets/About/img1.png";
import img2 from "../assets/About/img2.png";
import bgimg1 from "../assets/About/bgimg1.png";
import img3 from "../assets/About/img3.png";
import img4 from "../assets/About/img4.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <>
           <div className="container mt-5">
            <div
                className="d-flex justify-content-center align-items-start" // align content at top
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
                    overflowX: "hidden",
                }}
            >
                {/* Glass/matte effect container */}
                <div
                    className=""
                    style={{
                        position: "relative",
                        width: "100%",
                        marginTop: "clamp(60px, 12vh, 120px)",               // top spacing
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        padding: "2rem",
                        color: "#fff",
                    }}
                >
                    <h1 className="mb-3">Seamless Staffing Limitless Growth</h1>
                    <p style={{ fontSize: "20px" }}>
                        Unleashing potential through tailored staffing and workforce.
                        Streamline your workforce strategies with our comprehensive Talent Management solutions.
                        From staffing to career development, we ensure the right talent meets the right opportunities.
                        Designed to transform your business and elevate success.
                    </p>
                </div>
            </div>

</div>

            <div className="container text-center mt-5">

                <h2 className="mt-5 mb-3 fw-bold">Streamlining Talent Management for Business Growth </h2>
                <p className="mb-5" style={{ color: "#015670" }}>HRIFY specializes in providing comprehensive talent management services tailored to meet diverse business needs, with a focus on IT Staffing. We offer flexible solutions, including: </p>
            </div>


            <div className="container-fluid">
                <p>Contract Staffing – Flexible staffing for short-term or project-based needs, giving you access to skilled professionals when you need them.
                    Permanent Placement – We connect you with top talent for long-term roles, ensuring the right fit for your organization.
                    Contract-to-Hire – A flexible option allowing you to evaluate talent before transitioning them into permanent positions.</p>
            </div>
            <div
                className="s mt-5 p-3 mb-5"
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: "1.8",
                    fontSize: "16px",
                    color: "#FFFF00",
                    backgroundColor: "#000"
                }}
            >
                <p>
                    Contract Staffing offers flexible staffing solutions for short-term or project-based requirements, providing access to skilled professionals exactly when you need them, while Permanent Placement connects you with top-tier talent for long-term roles to ensure the right fit for your organization’s growth, and Contract-to-Hire gives you a flexible hiring approach that allows you to evaluate talent on contract before transitioning them into permanent positions.
                </p>
            </div>


            <div className="container py-5">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                        <h3 className="mb-3">Contract Staffing and Placement</h3>
                        <p>
                            Flexible staffing solutions to address short-term or project-based workforce requirements with skilled professionals.
                            We provide end-to-end recruitment services to help businesses find and retain top talent for long-term, full-time roles.
                            Our rigorous screening process ensures candidates are the right fit for your company culture and objectives.
                            We specialize in sourcing senior-level executives and leadership talent to drive strategic growth and innovation within your organization.
                            Our extensive network and targeted approach guarantee quality hires.
                        </p>

                        <h4 className="mt-4">Contract-to-Hire</h4>
                        <p>
                            Our Contract-to-Hire solutions offer flexibility for businesses to assess a candidate’s performance and cultural fit before making a permanent hiring decision.
                            This approach minimizes hiring risks, ensures seamless transitions, and helps organizations secure top talent with confidence.
                        </p>

                        <h4 className="mt-4">Permanent Staffing</h4>
                        <p>
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
                    backgroundImage: `url(${bgimg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    padding: "60px 0",
                }}
            >
                {/* Dark overlay */}
                <div
                    style={{
                        // backgroundColor: "rgba(0, 20, 30, 0.85)",
                        width: "100%",
                        height: "100%",
                    }}
                >
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
                                        // border: "4px solid #fff",
                                    }}
                                />

                                <h5
                                    style={{
                                        color: "#ffd700",
                                        marginTop: "15px",
                                        fontWeight: "600",
                                    }}
                                >
                                    J. Jayakrishnan M.E, MBA.
                                </h5>

                                <p style={{ color: "#fff", marginBottom: "5px" }}>
                                    Managing Director
                                </p>

                                <div
                                    style={{
                                        display: "inline-block",
                                        backgroundColor: "#fff",
                                        padding: "5px 15px",
                                        borderRadius: "5px",
                                        fontWeight: "700",
                                    }}
                                >
                                    HRIFY
                                </div>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="col-lg-8 col-md-12">

                                {/* VISION */}
                                <h3 style={{ color: "#ffd700", fontWeight: "700" }}>
                                    VISION
                                </h3>
                                <p style={{ color: "#fff", lineHeight: "1.8" }}>
                                    Known for its innovative solutions and exceptional client service,
                                    HRIFY Technologies sets the <br />standard in
                                    <span style={{ color: "#ffd700" }}>
                                        {" "}Talent Management, IT Services & IT Consulting{" "}
                                    </span>
                                    with its cutting-edge technologies and commitment to exceeding
                                    customer expectations.
                                </p>

                                {/* MISSION */}
                                <h3
                                    style={{
                                        color: "#ffd700",
                                        fontWeight: "700",
                                        marginTop: "30px",
                                    }}
                                >
                                    MISSION
                                </h3>
                                <p style={{ color: "#fff", lineHeight: "1.8" }}>
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
                <div className="row align-items-center">

                    {/* Left Side - Image */}
                    <div className="col-md-6 mb-4 mb-md-0">
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
                            style={{
                                fontWeight: "700",
                                marginBottom: "20px"
                            }}
                        >
                            Guiding the Vision
                        </h2>

                        <h5 style={{ fontWeight: "600", color: "#015670" }}>General Version (for personal profile or business):</h5>
                        <p style={{ lineHeight: "1.7" }}>"Passionate about delivering excellence, we strive to create meaningful experiences through innovation, dedication, and a deep understanding of our field."</p>

                        <h5 style={{ fontWeight: "600", color: "#015670" }}>Corporate Version:</h5>
                        <p style={{ lineHeight: "1.7" }}>"We are committed to providing reliable and cutting-edge solutions that drive growth and add value to our clients' businesses."</p>

                        <h5 style={{ fontWeight: "600", color: "#015670" }}>Creative Professional Version:</h5>
                        <p style={{ lineHeight: "1.7" }}>"Driven by creativity and inspired by purpose, I bring ideas to life through storytelling, design, and a constant desire to learn."</p>


                    </div>

                </div>
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
    );
}

export default About;
