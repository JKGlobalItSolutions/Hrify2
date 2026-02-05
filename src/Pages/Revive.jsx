import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/Carrer/img3.jpeg";
import aboutImg from "../assets/Carrer/img3.jpeg";

/* ================= COUNT UP HOOK ================= */
const useCountUp = (end, duration = 1500) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const increment = end / (duration / 16);

        const animate = () => {
          start += increment;
          if (start < end) {
            setCount(Math.floor(start));
            requestAnimationFrame(animate);
          } else setCount(end);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const Revive = () => {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f3c57, #1f6a8a)",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <motion.div
              className="col-lg-6 text-white"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h1 variants={fadeUp} className="fw-bold mt-4" style={{ fontSize: "50px" }}>
                Restart Your Career with <br />
                <span style={{ color: "#6bc1ff" }}>REVIVE</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-white-50 mt-3">
                A structured returnship program supporting women professionals
                to confidently return to the workforce.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-4">
                <button className="btn btn-light rounded-pill px-4 fw-semibold">
                  Apply Now
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-lg-6 text-center mt-5 mt-lg-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={heroImage}
                alt="REVIVE"
                className="img-fluid"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.35)"
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT REVIVE ================= */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">

            <motion.div
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="fw-bold mb-3">
                 <span style={{ color: "#4da3ff" }}>REVIVE PROGRAM</span>
              </h2>

              <p className="text-muted">
                REVIVE by HRIFY is a support program created for women professionals
                who want to return to work after a career break. It helps you rebuild
                confidence, refresh your skills, and move forward at your own pace.
              </p>

              <p className="text-muted">
                REVIVE respects your past experience and understands that career breaks
                happen for many reasons—motherhood, caregiving, personal priorities,
                or life transitions.
              </p>

              <p className="text-muted">
                With guidance, mentoring, and real exposure, REVIVE helps you feel ready
                to step back into your career when you choose.
              </p>

              <p className="fw-semibold text-primary">
                Because a career break does not mean the end of your career.
              </p>
            </motion.div>

            <motion.div
              className="col-lg-6 text-center mt-4 mt-lg-0"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutImg}
                alt="REVIVE Support"
                className="img-fluid rounded-4 shadow"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
    {/* ================= HOW IT WORKS ================= */}
<section className="py-5 bg-white">
  <div className="container text-center">

    <motion.h2
      className="fw-bold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      How <span style={{ color: "#4da3ff" }}>REVIVE</span> Works
    </motion.h2>

    <p className="text-muted mb-5">
      A simple four-step journey to restart your career
    </p>

    <motion.div
      className="row g-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {[
        [
          "1",
          "bi-clipboard-check",
          "Apply & Skill Assessment",
          "Personalized evaluation to understand your strengths"
        ],
        [
          "2",
          "bi-mortarboard",
          "Structured Upskilling",
          "Targeted learning aligned to industry needs"
        ],
        [
          "3",
          "bi-briefcase",
          "Client Project Experience",
          "Hands-on work with real client projects"
        ],
        [
          "4",
          "bi-rocket-takeoff",
          "Career Transition",
          "Support to move into contract or full-time roles"
        ]
      ].map((item, i) => (
        <motion.div
          className="col-lg-3 col-md-6"
          key={i}
          variants={fadeUp}
          whileHover={{
            y: -12,
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="revive-card text-center h-100">
            <div className="step-circle">{item[0]}</div>

            <motion.i
              className={`bi ${item[1]} fs-2 text-primary`}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            <h6 className="fw-bold mt-3">{item[2]}</h6>
            <p className="text-muted small mt-2">
              {item[3]}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* ===== LOCAL STYLES ===== */}
  <style>{`
    .revive-card {
      background: #ffffff;
      border-radius: 18px;
      padding: 40px 25px 30px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.08);
      position: relative;
      transition: all 0.3s ease;
    }

    .step-circle {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #4da3ff, #1f6a8a);
      color: #fff;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -18px;
      left: 50%;
      transform: translateX(-50%);
    }
  `}</style>
</section>


      {/* ================= PROGRAM OVERVIEW ================= */}
      <section
        style={{
          background: "linear-gradient(180deg, #1f4e68, #173f55)",
          padding: "100px 0"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-5">
            Program <span style={{ color: "#6bc1ff" }}>Overview</span>
          </h2>

          <div className="row g-4">
            <StatCard value={12} label="Week Program" />
            <StatCard value={100} label="Remote & Hybrid" suffix="+" />
            <StatCard value={4} label="Industry Domains" />
            <StatCard value={85} label="Conversion Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* ================= TOOLKIT ================= */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            The <span style={{ color: "#4da3ff" }}>REVIVE Toolkit</span>
          </h2>

          <div className="row g-4">
            {[
              ["🌱 Confidence Rebuilding", "Gentle mentoring to overcome self-doubt"],
              ["🧠 Skill Refresh Support", "Revisit and strengthen existing skills"],
              ["📝 Resume & Profile Guidance", "Update resume & professional profiles"],
              ["🎯 Career Direction Clarity", "Identify suitable roles & career paths"],
              ["💬 Interview Readiness", "Communicate your career break confidently"],
              ["🤝 Mentorship & Community", "Access mentors & supportive peer network"]
            ].map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="revive-card">
                  <h6 className="fw-bold">{item[0]}</h6>
                  <p className="text-muted mt-2">{item[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f3c57, #1f6a8a)",
          padding: "90px 0"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-4">
            REVIVE is here to support your comeback.
          </h2>
          <button className="btn btn-light btn-lg rounded-pill px-5 fw-semibold">
            Apply for REVIVE
          </button>
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`
        .revive-card {
          background: #fff;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          height: 100%;
        }
        .step-circle {
          width: 30px;
          height: 30px;
          background: #4da3ff;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
        }
      `}</style>

    </div>
  );
};

/* ================= STAT CARD ================= */
const StatCard = ({ value, label, suffix = "" }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div className="col-lg-3 col-md-6" ref={ref}>
      <div className="revive-card text-center">
        <h1 className="fw-bold text-primary">
          {count}{suffix}
        </h1>
        <p className="text-muted">{label}</p>
      </div>
    </div>
  );
};

export default Revive;
