
import logo from "../assets/Pillamar/logo1.png"
import img1 from "../assets/Pillamar/img1.png"
import img2 from "../assets/Pillamar/img2.png"
import img3 from "../assets/Pillamar/img3.png"
import img4 from "../assets/Pillamar/img4.png"
import img5 from "../assets/Pillamar/img5.png"
import img6 from "../assets/Pillamar/img6.png"
import img7 from "../assets/Pillamar/img7.png"


function Pillamar() {

    return (

        <>

            <div className="w-100 p-3">
                <img
                    src={img1}
                    alt="Hero"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block"
                    }}
                />
            </div>


            <div className="container text-center mt-5 mb-5">

                <img src={logo} className="mb-4" alt="" />

                <p style={{fontFamily:"poppins", fontSize:"20px", fontWeight:"bold"}}>Payroll Management Software streamlines the entire salary process by automating calculations, deductions, and tax compliance. It helps organizations ensure accurate and timely payments to employees while minimizing manual errors. By simplifying payroll tasks, it boosts HR efficiency and supports smooth workforce management.</p>


            </div>





            <div className="container my-5">
                <div className="row justify-content-center align-items-center g-4">

                    {/* Image 1 */}
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <img
                            src={img2}
                            alt="Image 1"
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "auto",
                                borderRadius: "20px"
                            }}
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <img
                            src={img3}
                            alt="Image 2"
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "auto",
                                borderRadius: "20px"
                            }}
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <img
                            src={img4}
                            alt="Image 3"
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "auto",
                                borderRadius: "20px"
                            }}
                        />
                    </div>

                </div>
            </div>



            <div
                style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #008961 0%, #002319 100%)",
                    padding: "60px 0"
                }}

                className="mb-5"
            >
                <div className="row m-0 align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-12 col-md-12 text-white px-5">
                        <h2 style={{ fontWeight: "700", marginBottom: "20px", fontSize:"50px", fontFamily:"poppins", fontWeight:"bold" }}>
                            About Pillamar
                        </h2>

                        <p style={{ fontSize: "25px", lineHeight: "1.7", fontFamily:"poppins", fontWeight:"bold" }}>
                            Our Payroll Management Software is built to simplify and automate your entire payroll workflow.
                            From employee onboarding to final payslip generation, every process is handled with precision
                            and compliance in mind. The system adapts to organizations of all sizes, ensuring flexibility,
                            accuracy, and complete control.
                        </p>

                        <p style={{ fontSize: "25px", lineHeight: "1.7", marginTop:"40px", fontFamily:"poppins", fontWeight:"bold" }}>
                            With real-time data integration, HR and finance teams can manage payroll effortlessly while
                            maintaining transparency for employees. Automated updates for statutory regulations help
                            businesses stay compliant without constant manual intervention.
                        </p>
                    </div>
                </div>
            </div>



            <div className="container py-5">
                <div className="row">
                    <div className="col-12">

                        <h3 className="mb-3" style={{ color: "#008961", fontFamily:"poppins", fontSize:"35px", fontWeight:"bold" }}>
                            Global Payroll Management
                        </h3>

                        <p style={{fontFamily:"poppins", fontSize:"20px",}}>
                            Our Payroll Management Software is designed to simplify and automate the
                            entire payroll process with accuracy, compliance, and efficiency. It
                            enables organizations to manage employee salaries, deductions,
                            incentives, taxes, and statutory compliance seamlessly, ensuring timely
                            and error-free payroll operations.
                        </p>

                        <p style={{fontFamily:"poppins", fontSize:"20px",}}>
                            The system provides a centralized platform to calculate payroll,
                            generate payslips, manage leave and attendance integration, and comply
                            with government regulations. With secure data handling and real-time
                            reporting, businesses gain better control, transparency, and confidence
                            in their payroll processes.
                        </p>

                        <p style={{fontFamily:"poppins", fontSize:"20px",}}>
                            Our solution reduces manual effort, minimizes errors, and saves valuable
                            time, allowing HR and finance teams to focus on strategic initiatives
                            rather than administrative tasks.
                        </p>

                        <h3 className="mb-3" style={{ color: "#008961", fontFamily:"poppins", fontSize:"35px", fontWeight:"bold" }}>
                            Benefits
                        </h3>

                        <p style={{fontFamily:"poppins", fontSize:"20px",}}>
                            By using our Payroll Management Software, businesses can ensure
                            accuracy, compliance, and efficiency while reducing operational
                            complexity and improving overall HR productivity.
                        </p>

                    </div>
                </div>
            </div>



            <div className="container py-5">
                <div className="row align-items-start">

                    {/* LEFT SIDE – TWO IMAGES */}
                    <div className="col-md-6">
                        <div className="mb-4">
                            <img
                                src={img5}
                                alt="UI Screen 1"
                                className="img-fluid"
                                style={{
                                    width: "70%",
                                    borderRadius: "6px",
                                }}
                            />
                        </div>

                        <div>
                            <img
                                src={img6}
                                alt="UI Screen 2"
                                className="img-fluid"
                                style={{
                                    width: "70%",
                                    borderRadius: "6px",
                                }}
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE – LONG IMAGE */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <img
                            src={img7}
                            alt="Profile"
                            className="img-fluid"
                            style={{
                                height: "620px",     // 👈 long image look
                                width: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                </div>
            </div>



        </>
    )

}



export default Pillamar