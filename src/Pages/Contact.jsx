import img2 from "../assets/Contact/img2.png"


function Contact() {




const labelStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#006b8f",
  marginBottom: "5px",
};

const inputStyle = {
  borderRadius: "6px",
  height: "40px",
  boxShadow: "inset 0 1px 4px rgba(0,0,0,0.15)",
};

const radioStyle = {
  accentColor: "#006b8f",
};



    return (


        <>

            <div className="container mt-5 mb-5">
                <div
                    className="d-flex justify-content-center align-items-end"
                    style={{
                        position: "relative",
                        paddingBottom: "80px",
                        width: "100%",
                        minHeight: "100vh",
                        margin: 0,
                        padding: 0,
                        backgroundImage: `url(${img2})`,
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
                            marginBottom: "80px",
                            marginTop: "clamp(60px, 12vh, 120px)",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            padding: "2rem",
                            color: "#fff",
                        }}
                    >
                        <div className="container text-center">
                            <h1 className="mb-3">
                                <b>CONTACT US</b>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container mt-4 mb-3 text-center">
                <h2 style={{ color: "#015670" }}><b>Ready to Take Your Business to New Heights? Partner with HRIFY!</b></h2>
                <p style={{ color: "#949494" }}>Thank you for considering HRIFY as your trusted partner. Fill out the form below, and our team will get back to you promptly to explore how we can support your business goals.</p>

            </div>




                <div className="container py-5">
      <div
        className="mx-auto"
        style={{
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label style={labelStyle}>Full Name</label>
            <input type="text" className="form-control" style={inputStyle} />
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Email Address</label>
            <input type="email" className="form-control" style={inputStyle} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label style={labelStyle}>Phone Number</label>
            <input type="text" className="form-control" style={inputStyle} />
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Company Name</label>
            <input type="text" className="form-control" style={inputStyle} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label style={labelStyle}>Industry</label>
            <select className="form-control" style={inputStyle}>
              <option></option>
            </select>
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Inquiry Reason For</label>
            <select className="form-control" style={inputStyle}>
              <option></option>
            </select>
          </div>
        </div>

        {/* Services Interest */}
        <div className="mb-4">
          <label style={labelStyle}>Services Interest</label>

          <div className="row">
            {[
              "IT Solutions & Consulting",
              "Talent Management Services",
              "Staffing Solutions",
              "Payroll Management",
              "Custom Software Development",
              "Other",
            ].map((item, index) => (
              <div className="col-md-4 mb-2" key={index}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="services"
                    style={radioStyle}
                  />
                  <label
                    className="form-check-label"
                    style={{ fontSize: "14px" }}
                  >
                    {item}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attachment */}
        <div className="mb-4">
          <label style={labelStyle}>Attachment</label>
          <input type="file" className="form-control" style={inputStyle} />
        </div>

        {/* Confirmation */}
        <div className="form-check mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            style={radioStyle}
          />
          <label
            className="form-check-label"
            style={{ fontSize: "14px", color: "#005f7f" }}
          >
            I confirm that the information provided is accurate and that I have
            obtained the candidate’s consent to share their details with HRIFY.
          </label>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            style={{
              backgroundColor: "#006b8f",
              color: "#fff",
              padding: "10px 30px",
              border: "none",
              borderRadius: "30px",
              fontWeight: "600",
            }}
          >
            Send Message
          </button>
        </div>

        {/* Footer text */}
        <p
          className="text-center mt-3"
          style={{ fontSize: "13px", color: "#888" }}
        >
          "Thank you for reaching out to HRIFY! We've received your details and
          will contact you shortly."
        </p>
      </div>
    </div>





        </>


    )

}



export default Contact