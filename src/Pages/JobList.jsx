import React, { useState, useEffect } from "react";
import JobDetail from "./JobDetail";

const JobList = ({ searchParams }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // popup form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    workAuth: "",
    jobTitle: "",
    email: "",
    country: "",
    address: "",
    state: "",
    city: "",
    zipcode: ""
  });

  // fetch jobs
  const fetchJobs = () => {
    const query = new URLSearchParams(searchParams).toString();
    fetch(`https://hrify-backend-g2t4.onrender.com/api/jobs?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, [searchParams]);

  if (loading) return <p className="p-3">Loading jobs...</p>;

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://hrify-backend-g2t4.onrender.com/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      alert("Application sent successfully!");
      setShowForm(false);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        workAuth: "",
        jobTitle: "",
        email: "",
        country: "",
        address: "",
        state: "",
        city: "",
        zipcode: ""
      });
    } catch (err) {
      alert("Failed to send application");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="fw-bold mb-4">Job Listings</h2>

        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="p-3 border rounded mb-3 shadow-sm"
              onClick={() => setSelectedJob(job)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="text-primary fw-semibold">{job.title}</h5>
              <p className="text-muted mb-1">{job.location}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Company : {job.company} <br />
                {job.description.slice(0, 100)}...
              </p>
            </div>
          ))
        ) : (
          <div className="text-center p-5">
            <h4 className="text-muted">No jobs found</h4>
          </div>
        )}
      </div>

      <div
        className="text-center p-4 mt-4 shadow rounded"
        style={{
          background: "linear-gradient(to right, #0891b2, #0096b2)",
          color: "white",
        }}
      >
        <h4 className="mb-3">Didn't find a role that matches your skills?</h4>
        <p className="mb-3">
          We'd like to stay connected. Join our talent pool, and our recruiters
          will reach out when a job matches your skills.
        </p>
        <button
          className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow"
          onClick={() => setShowForm(true)}
        >
          Submit Resume
        </button>
      </div>

      {/* Popup Form */}
{showForm && (
  <div
    className="d-flex align-items-center justify-content-center"
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 1050,
      overflowX: "hidden",
      padding: "10px", // small gap on mobile
      marginRight:"0px"
    }}
  >
    <div
      className="bg-white rounded shadow-lg"
      style={{
        width: "100%",
        maxWidth: "650px",
        maxHeight: "90vh",
        overflowY: "auto",
        border: "2px solid #38bdf8",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center p-3"
        style={{ background: "#38bdf8", color: "black" }}
      >
        <h5 className="m-0 fw-bold">Apply For Job</h5>
        <button
          className="btn-close"
          onClick={() => setShowForm(false)}
        ></button>
      </div>

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="row g-3 p-3" style={{marginRight:"0px"}}>
        {/** Form Fields **/}
        <div className="col-md-6">
          <label className="form-label fw-bold">First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.firstName}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Middle Name</label>
          <input
            name="middleName"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.middleName}
            onChange={handleFormChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.lastName}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Mobile No</label>
          <input
            name="mobile"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.mobile}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Work Authorization</label>
          <select
            name="workAuth"
            className="form-select"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.workAuth}
            onChange={handleFormChange}
            required
          >
            <option value="">Select</option>
            <option value="Citizen">Citizen</option>
            <option value="Green Card">Green Card</option>
            <option value="Work Visa">Work Visa</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Job Title</label>
          <input
            name="jobTitle"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.jobTitle}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Country</label>
          <input
            name="country"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.country}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Address</label>
          <input
            name="address"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.address}
            onChange={handleFormChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">State</label>
          <input
            name="state"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.state}
            onChange={handleFormChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">City</label>
          <input
            name="city"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.city}
            onChange={handleFormChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Zipcode</label>
          <input
            name="zipcode"
            type="text"
            className="form-control"
            style={{ border: "1px solid #38bdf8" }}
            value={formData.zipcode}
            onChange={handleFormChange}
          />
        </div>

        <div className="col-12 text-center mt-3">
          <button
            type="submit"
            className="px-5 py-2 fw-bold"
            style={{
              background: "linear-gradient(to right, #00c6ff, #0072ff)",
              border: "none",
              borderRadius: "25px",
              color: "white",
              fontSize: "16px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            }}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  </div>
)}



    </>
  );
};

export default JobList;
