import emailjs from "emailjs-com";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9cq0xj9",     // example: service_abcd123
        "template_fl0ze0x",    // example: template_xyz456
        formRef.current,
        "mVCEnSjFbfNAJKKPz"      // example: qwertyuiop123
      )
      .then(
        () => {
          alert("Enquiry Form Sended Successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send inquiry ❌");
          console.error(error.text);
        }
      );
  };

  return (
    <>
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
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h4 className="text-center mb-4">Submit Your Inquiry</h4>

          <form ref={formRef} onSubmit={sendEmail}>
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="full_name"
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Business Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your business email"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Seeking */}
            <div className="mb-3">
              <label className="form-label">I am seeking</label>
              <input
                type="text"
                name="seeking"
                className="form-control"
                placeholder="What are you seeking?"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="form-label">
                Give us an overview of your expectations
              </label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Describe your expectations"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#015670",
                color: "#ffffff",
                fontWeight: "500",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
