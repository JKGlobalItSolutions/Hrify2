import img8 from "../assets/Industries/img8.png";
import HLimg1 from "../assets/Industries/HLimg1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

import healthcareImg from "../assets/Industries/img8.jpeg";
import serveImg from "../assets/Industries/img9.jpeg";

function Industry_HL() {


 const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };


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

           <style>
        {`
          .hover-lift {
            transition: all 0.4s ease;
          }
          .hover-lift:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          }
        `}
      </style>
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
          <h1 className="mb-2" style={{ fontSize: "50px", fontWeight: "700" }}>
           Healthcare and Life Sciences
          </h1>

            <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
            Providing manpower expertise for healthcare systems, life science innovation, and compliant, patient-centric operational support.
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



           <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(180deg, #f4fbff 0%, #ffffff 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={healthcareImg}
                  alt="HRIFY Healthcare"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    background: "#e6f6ff",
                    color: "#0d6efd",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  About HRIFY Healthcare
                </span>

                <h2
                  style={{
                    fontSize: "34px",
                    fontWeight: 700,
                    color: "#0f2f44",
                    marginBottom: "20px",
                  }}
                >
                  Building Stronger Healthcare Workforces
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#4f6b7a",
                    marginBottom: "16px",
                  }}
                >
                  HRIFY Healthcare is a dedicated staffing and workforce
                  solutions provider designed to support the evolving needs of
                  the healthcare industry. We partner with hospitals, clinics,
                  diagnostic centers, life sciences firms, and healthcare
                  technology organizations to deliver skilled, compliant, and
                  dependable talent across clinical and non-clinical roles.
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#4f6b7a",
                    marginBottom: "24px",
                  }}
                >
                  With a strong understanding of healthcare workflows and
                  workforce challenges, HRIFY offers end-to-end recruitment
                  services—from requirement analysis and talent sourcing to
                  credential verification, onboarding, and ongoing support. We
                  specialize in hiring doctors, nurses, allied health
                  professionals, and healthcare IT specialists, ensuring every
                  candidate meets industry standards and organizational
                  expectations. Our structured hiring approach helps healthcare
                  organizations build resilient, high-performing teams while
                  focusing on exceptional patient care.
                </p>

                {/* HIGHLIGHTS */}
                <div className="row">
                  {[
                    "Clinical & Non-Clinical Staffing",
                    "Credentialed & Compliant Talent",
                    "End-to-End Hiring Support",
                  ].map((item, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          padding: "14px 16px",
                          background: "#ffffff",
                          borderRadius: "12px",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#0f2f44",
                        }}
                      >
                        ✔ {item}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY HRIFY ================= */}
      <section className="py-5" style={{ background: "#f2fbff" }}>
        <div className="container">
          <motion.h2
            {...fadeUp}
            style={{ fontSize: "40px", fontWeight: "700", color: "#015670" }}
          >
            Why HRIFY Healthcare
          </motion.h2>

          <div className="row mt-4">
            {[
              "Healthcare-specific recruitment expertise",
              "Credentialed & compliance-verified candidates",
              "Rapid deployment with zero compromise on quality",
              "Flexible staffing – contract, permanent & on-demand",
              "People-first hiring with ethical practices",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-md-6 mb-3"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className="hover-lift"
                  style={{
                    background: "#fff",
                    padding: "22px",
                    borderRadius: "14px",
                    fontSize: "18px",
                  }}
                >
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={serveImg}
                alt="Who We Serve"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 25px 45px rgba(0,0,0,0.15)",
                }}
              />
            </motion.div>

            <motion.div className="col-lg-6 mt-4 mt-lg-0" {...fadeUp}>
              <h2
                style={{
                  fontSize: "38px",
                  fontWeight: "700",
                  color: "#015670",
                }}
              >
                Who We Serve
              </h2>
              <p style={{ fontSize: "20px", lineHeight: "1.9" }}>
                We partner with a wide range of healthcare organizations,
                including hospitals, specialty clinics, diagnostic centers, home
                healthcare providers, assisted living facilities, telehealth
                platforms, and healthcare IT organizations. Our workforce
                solutions are designed to support diverse care environments by
                delivering skilled, reliable talent that strengthens operations,
                enhances patient care, and meets evolving healthcare demands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ROLES ================= */}
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container">
          <motion.h2
            {...fadeUp}
            style={{ fontSize: "40px", fontWeight: "700", color: "#015670" }}
          >
            Healthcare Roles We Hire
          </motion.h2>

          <motion.p
            {...fadeUp}
            style={{ fontSize: "20px", maxWidth: "900px", marginTop: "15px" }}
          >
            We deliver skilled professionals across clinical, allied, and
            healthcare technology domains to support patient care and
            operational continuity.
          </motion.p>

          <div className="row mt-5">
            {[
              [
                "Doctors & Physicians",
                "Specialists, consultants, surgeons, general practitioners",
              ],
              [
                "Nursing Professionals",
                "Registered nurses, ICU, emergency & clinical nurses",
              ],
              [
                "Allied Healthcare",
                "Lab techs, radiographers, pharmacists, therapists",
              ],
              [
                "Healthcare IT & Admin",
                "EMR/EHR specialists, billing, ops & IT staff",
              ],
            ].map((role, i) => (
              <motion.div
                key={i}
                className="col-md-6 col-lg-3 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div
                  className="hover-lift"
                  style={{
                    background: "#f9fdff",
                    padding: "30px",
                    borderRadius: "18px",
                    height: "100%",
                  }}
                >
                  <h5 style={{ fontWeight: "600", color: "#015670" }}>
                    {role[0]}
                  </h5>
                  <p style={{ fontSize: "17px", marginTop: "10px" }}>
                    {role[1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      {/* ================= PROCESS ================= */}
      <section
        style={{
          background: "linear-gradient(180deg,#eef8fc,#d9eef8)",
          padding: "80px 0",
        }}
      >
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#0b4c63",
            }}
          >
            Our Healthcare Hiring Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: "18px",
              color: "#245c70",
              maxWidth: "820px",
              margin: "15px auto 55px",
            }}
          >
            Our structured hiring process ensures speed, compliance, and quality
            at every stage of healthcare recruitment.
          </motion.p>

          <div className="row justify-content-center">
            {[
              {
                title: "Requirement Analysis",
                desc: "We work closely with healthcare organizations to understand staffing needs, role specifications, compliance requirements, and workforce challenges.",
              },
              {
                title: "Talent Sourcing",
                desc: "Our recruiters source qualified doctors, nurses, allied health professionals, and healthcare IT talent through verified networks and databases.",
              },
              {
                title: "Credential Verification",
                desc: "We conduct rigorous background checks, license validation, certifications review, and regulatory compliance verification.",
              },
              {
                title: "Client Selection",
                desc: "Shortlisted candidates are presented to clients for interviews, skill assessments, and final selection.",
              },
              {
                title: "Onboarding & Support",
                desc: "We ensure smooth onboarding, documentation, orientation, and continuous post-placement support.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="col-md-4 col-lg-3 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  style={{
                    background: "#ffffff",
                    padding: "28px",
                    borderRadius: "18px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  {/* Step Number */}
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#0e6e8b",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      fontSize: "18px",
                      margin: "0 auto 15px",
                    }}
                  >
                    {i + 1}
                  </div>

                  <h6
                    style={{
                      color: "#0b4c63",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Step {i + 1}
                  </h6>

                  <h5 style={{ color: "#0b4c63", fontWeight: "600" }}>
                    {step.title}
                  </h5>

                  <p
                    style={{
                      fontSize: "15.5px",
                      color: "#245c70",
                      lineHeight: "1.7",
                      marginTop: "10px",
                    }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
<section
      style={{
        padding: "120px 0",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal Corner Shape */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "380px",
          height: "380px",
          background: "linear-gradient(135deg, #2f6f8f, #2f6f8f)",
          transform: "rotate(45deg)",
          borderRadius: "40px",
          opacity: 0.15,
        }}
      />

      {/* Bottom Soft Accent */}
      <div
        style={{
          position: "absolute",
          bottom: "-140px",
          left: "-140px",
          width: "420px",
          height: "420px",
          background: "linear-gradient(135deg, #cfe9f4, #ffffff)",
          transform: "rotate(45deg)",
          borderRadius: "60px",
        }}
      />

      <div className="container position-relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            background: "#ffffff",
            borderRadius: "28px",
            padding: "70px 60px",
            boxShadow: "0 30px 80px rgba(31,79,102,0.15)",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Small Tag */}
          <span
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "30px",
              backgroundColor: "rgba(47,111,143,0.1)",
              color: "#2f6f8f",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "18px",
            }}
          >
            Healthcare Workforce Solutions
          </span>

          {/* Heading */}
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#1f4f66",
              marginBottom: "20px",
            }}
          >
            Partner with HRIFY Healthcare
          </h2>

          {/* Description */}
          <p
            style={{
              maxWidth: "820px",
              margin: "0 auto 40px",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#4f6f82",
            }}
          >
            Build a resilient, compliant, and future-ready healthcare workforce
            with HRIFY. From doctors and nurses to allied health and healthcare IT,
            we deliver talent you can trust.
          </p>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 18px 40px rgba(47,111,143,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "inline-block",
              padding: "16px 52px",
              background:
                "linear-gradient(135deg, #2f6f8f 0%, #1f4f66 100%)",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "50px",
              textDecoration: "none",
            }}
          >
            Partner with Us
          </motion.a>
        </motion.div>
      </div>
    </section>



        </>
    )
}
export default Industry_HL