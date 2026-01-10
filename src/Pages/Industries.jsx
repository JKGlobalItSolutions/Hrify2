import img1 from "../assets/Industries/img1.png";
import img2 from "../assets/Industries/img2.png";
import img3 from "../assets/Industries/img3.png";
import img4 from "../assets/Industries/img4.png";
import img5 from "../assets/Industries/img5.png";
import img6 from "../assets/Industries/img6.png";



import img10 from "../assets/Industries/img10.png";

import bgimg1 from "../assets/Industries/bgimg1.png";



function Industries() {


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
                                Elevate Teams, Achieve Success
                            </h1>

                            <p
                                className="text-center text-md-start"
                                style={{
                                    fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font
                                }}
                            >
                                "From IT Staffing to Permanent Placements , Contract-to-Hire, and Training Programs,We Connect You with Top Talent for Long-Term Success."
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid p-0">
                <img
                    src={img2}
                    alt="Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
                    }}
                />
            </div>




            <div className="container-fluid p-2 mt-3 text-center" >
                <h1 className="mb-2"><b>Information Technology</b></h1>
                <p style={{ color: "#015670" }}>In today’s digital age, Information Technology plays a vital role in transforming businesses and driving growth. We offer comprehensive IT services designed to enhance productivity, streamline operations, and deliver measurable results. From software development and system integration to IT consulting and managed services, our solutions are tailored to meet the unique needs of each organization.</p>

                <p style={{ color: "#015670" }}>Our team leverages the latest technologies and industry best practices to ensure your business stays ahead of the competition. Whether you’re a startup or an established enterprise, we help you harness the power of technology to innovate, scale, and succeed in a rapidly evolving digital landscape. </p>
            </div>


            <div className="container py-5">
                <div className="row align-items-center">

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


                    {/* RIGHT CONTENT - col-8 */}
                    <div className="col-lg-8 col-md-12">
                        <h3 className="mb-3">Flexible Staffing Solutions</h3>

                        <p style={{ lineHeight: "1.7" }}>
                            Whether you require temporary professionals to support short-term projects,
                            contract-based resources to manage peak workloads, or permanent hires for
                            long-term strategic roles, we offer flexible and customized staffing solutions
                            aligned with your business objectives.
                        </p>

                        <p style={{ lineHeight: "1.7" }}>
                            Our scalable workforce models enable you to respond swiftly to changing demands,
                            optimize operational efficiency, and maintain continuity across projects.
                            By ensuring access to the right talent at the right time, we help your organization
                            stay agile, competitive, and growth-focused.
                        </p>
                    </div>

                </div>
            </div>




            <div className="container py-5">
                <div className="row align-items-center">


                    {/* RIGHT CONTENT - col-8 */}
                    <div className="col-lg-8 col-md-12">
                        <h3 className="mb-3">Specialized IT Talent</h3>

                        <p style={{ lineHeight: "1.7" }}>
                            Access a pool of skilled IT professionals with expertise across various technologies, including software development, networking, cybersecurity, and cloud computing. Our dedicated talent acquisition team ensures you are matched with the right experts to fit your specific project requirements and company culture.</p>

                        <p style={{ lineHeight: "1.7" }}>We offer flexible hiring models, including full-time, part-time, and contract-based staffing, to support your dynamic business needs. Our professionals are highly trained, certified, and experienced in delivering high-quality solutions across diverse industries, ensuring your IT initiatives are executed seamlessly and efficiently.
                        </p>




                    </div>



                    {/* LEFT IMAGE - col-4 */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                        <img
                            src={img4}
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


            <div className="container py-5">
                <div className="row align-items-center">

                    {/* LEFT IMAGE - col-4 */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                        <img
                            src={img5}
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
                        <h3 className="mb-3">Ongoing Support and Partnership </h3>

                        <p style={{ lineHeight: "1.7" }}>
                            Our commitment doesn’t end with placement. We provide continuous support to ensure project success and satisfaction for both clients and candidates. As your strategic partner, we anticipate future needs and adapt to changing business conditions to foster long-term relationships built on trust.
                        </p>
                        <h3 className="mb-3">Industry Expertise</h3>
                        <p style={{ lineHeight: "1.7" }}>
                            Our extensive experience in the IT field enables us to understand the specific challenges and demands of the industry. Whether you’re operating in healthcare, finance, manufacturing, or retail, our industry-focused approach ensures we provide professionals with the knowledge and skills that align with your business goals.
                        </p>
                    </div>

                </div>
            </div>



            <div className="container py-5">
                <div className="row align-items-center">


                    {/* RIGHT CONTENT - col-8 */}
                    <div className="col-lg-8 col-md-12">
                        <h3 className="mb-3">Specialized IT Talent</h3>

                        <p style={{ lineHeight: "1.7" }}>
                            Access a pool of skilled IT professionals with expertise across various technologies, including software development, networking, cybersecurity, and cloud computing. Our dedicated talent acquisition team ensures you are matched with the right experts to fit your specific project requirements and company culture.</p>

                        <p style={{ lineHeight: "1.7" }}>We offer flexible hiring models, including full-time, part-time, and contract-based staffing, to support your dynamic business needs. Our professionals are highly trained, certified, and experienced in delivering high-quality solutions across diverse industries, ensuring your IT initiatives are executed seamlessly and efficiently.
                        </p>




                    </div>



                    {/* LEFT IMAGE - col-4 */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                        <img
                            src={img6}
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


            <div
                className="container-fluid py-5"
                style={{
                    background: `
      linear-gradient(
        to right,
        #000000 0%,
        #000000 30%,
        #666666 50%,
        #000000 70%,
        #000000 100%
      )
    `
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {/* MAIN HEADING */}
                            <h2
                                className="mb-4"
                                style={{
                                    color: "#ffc107",   // yellow
                                    fontWeight: "600"
                                }}
                            >
                                Expertise across industries brings fresh perspectives
                            </h2>

                            {/* MAIN PARAGRAPH */}
                            <p
                                style={{
                                    color: "#ffffff",
                                    lineHeight: "1.8"
                                }}
                            >
                                Cross-industry expertise is the capability to integrate knowledge,
                                skills, and innovative approaches gained from diverse sectors to
                                create transformative solutions and strategic insights. By drawing
                                on a wide range of experiences, this expertise fosters creativity and
                                drives innovation, enabling organizations to approach challenges from
                                fresh, informed perspectives. It breaks traditional silos, introduces
                                unconventional methodologies, and allows businesses to adapt and thrive
                                in dynamic markets by leveraging proven practices from various
                                industries. This holistic approach not only enhances problem-solving
                                capabilities but also paves the way for competitive advantage and
                                sustainable growth.
                            </p>

                            {/* SUB HEADING */}
                            <h4 className="mt-4" style={{ color: "#ffc107" }}>
                                Enhanced Problem-Solving
                            </h4>
                            <p style={{ color: "#ffffff", lineHeight: "1.8" }}>
                                We apply cross-sector insights and innovative thinking to solve complex
                                business challenges. Our approach combines experience from various
                                industries to provide fresh perspectives, allowing us to develop
                                tailored solutions that effectively address both common and unique
                                issues faced by organizations.
                            </p>

                            <h4 className="mt-4" style={{ color: "#ffc107" }}>
                                Adaptability
                            </h4>
                            <p style={{ color: "#ffffff", lineHeight: "1.8" }}>
                                Our teams are highly adaptable, easily transferring knowledge and best
                                practices across dynamic and evolving markets. This flexibility enables
                                us to meet the unique demands of different industries, ensuring seamless
                                integration and optimal performance in various business environments.
                            </p>

                            <h4 className="mt-4" style={{ color: "#ffc107" }}>
                                Competitive Edge
                            </h4>
                            <p style={{ color: "#ffffff", lineHeight: "1.8" }}>
                                By integrating proven methods and innovative strategies from a variety
                                of industries, we provide our clients with a significant competitive
                                edge. Our solutions not only enhance operational efficiency but also
                                drive sustainable growth, helping businesses stay ahead in today’s
                                fast-paced market landscape.
                            </p>

                        </div>
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
                        backgroundImage: `url(${img10})`,
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
                        <div className="container p-3" style={{ backgroundColor: "rgba(1, 107, 169, 0.92)", }}>
                            <h1 className="mb-3 text-center text-md-start">
                                Future Skills Development
                            </h1>

                            <p
                                className="text-center text-md-start"
                                style={{
                                    fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font
                                }}
                            >
                                Industry refers to the production of goods or services within an economy. It plays a vital role in economic development by generating employment, boosting exports, and enhancing technological innovation. Industries are broadly categorized into sectors such as manufacturing, services, agriculture, and construction. With the rise of automation and digital technologies, industries are evolving rapidly to meet global demands and sustainability goals.

                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid p-2 mt-3 text-center" >
                <h2 className="mb-2" style={{ color: "#015670" }}><b>Let’s bring your vision to life share your project requirements!</b></h2>
                <p >Please fill out the form below with your requirements to help us understand your specific needs. Our team will review your details and get back to you with tailored solutions for your industry.</p>
            </div>


            <div className="container-fluid p-0">
                <div
                    className="min-vh-100"
                    style={{
                        backgroundImage: `url(${bgimg1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        position: "relative"
                    }}
                >
                    {/* Dark overlay */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.35)",
                            zIndex: 1
                        }}
                    />

                    {/* RIGHT HALF FORM WRAPPER */}
                    <div
                        className="d-flex align-items-center"
                        style={{
                            position: "relative",
                            zIndex: 2,
                            marginLeft: "50%",     // 🔑 KEY LINE
                            width: "50%",
                            minHeight: "100vh"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                padding: "40px"
                            }}
                        >
                            {/* FORM CARD */}
                            <div
                                style={{
                                    background: "rgba(255,255,255,0.95)",
                                    borderRadius: "16px",
                                    padding: "30px",
                                    boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
                                    maxWidth: "520px",
                                    margin: "0 auto"
                                }}
                            >
                                <form>

                                    {[
                                        "Full Name",
                                        "Email Address",
                                        "Phone Number",
                                        "Company Name",
                                        "Location"
                                    ].map((label, index) => (
                                        <div className="mb-3" key={index}>
                                            <label
                                                className="form-label fw-semibold"
                                                style={{ color: "#015670" }}
                                            >
                                                {label}
                                            </label>
                                            <input
                                                className="form-control"
                                                style={{
                                                    height: "45px",
                                                    borderRadius: "8px"
                                                }}
                                            />
                                        </div>
                                    ))}

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold" style={{ color: "#015670" }}>
                                            Select Industry
                                        </label>
                                        <select className="form-select" style={{ height: "45px" }}>
                                            <option>Select</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold" style={{ color: "#015670" }}>
                                            Specific Services Required
                                        </label>
                                        <select className="form-select" style={{ height: "45px" }}>
                                            <option>Select</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-semibold" style={{ color: "#015670" }}>
                                            Additional Information
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            style={{ borderRadius: "8px" }}
                                        />
                                    </div>

                                    <div className="text-center">
                                        <button
                                            className="btn px-5"
                                            style={{
                                                background: "#015670",
                                                color: "#fff",
                                                borderRadius: "30px",
                                                height: "45px",
                                                fontWeight: "600"
                                            }}
                                        >
                                            Submit Inquiry
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>

    );

}



export default Industries
