import React, { useState, useEffect } from "react";

import img1 from "../assets/Contact/img1.png"

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [loginError, setLoginError] = useState("");
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    workMode: "",
    description: "",
    salaryRange: "",
    benefits: "",
    responsibilities: "",
    requiredSkills: "",
    education: "",
    experience: "",
    techSkills: "",
    softSkills: ""
  });

  // Fetch all jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("https://hrify-backend-g2t4.onrender.com/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new job
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://hrify-backend-g2t4.onrender.com/api/jobs", {
        ...formData,
        benefits: formData.benefits.split(",").map(s => s.trim()),
        responsibilities: formData.responsibilities.split(",").map(s => s.trim()),
        requiredSkills: formData.requiredSkills.split(",").map(s => s.trim()),
        techSkills: formData.techSkills.split(",").map(s => s.trim()),
        softSkills: formData.softSkills.split(",").map(s => s.trim())
      });
      // Reset form
      setFormData({
        title: "",
        company: "",
        location: "",
        workMode: "",
        description: "",
        salaryRange: "",
        benefits: "",
        responsibilities: "",
        requiredSkills: "",
        education: "",
        experience: "",
        techSkills: "",
        softSkills: ""
      });
      fetchJobs();
    } catch (err) {
      console.error("Error adding job:", err);
    }
  };

  // Delete a job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hrify-backend-g2t4.onrender.com/api/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  // Handle login input change
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  // If not logged in, show login form
  if (!isLoggedIn) {
    return (
      <div className="container-fluid p-0" style={{ minHeight: "100vh" }}>
      <div className="row g-0 h-100">

        {/* LEFT LOGIN FORM */}
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <div style={{ width: "80%", maxWidth: "400px" }}>

            {/* <p style={{ cursor: "pointer", color: "#666" }}>← Back</p> */}

            {/* <h2 className="fw-bold mb-3">Sign in</h2>
            <p className="text-muted mb-4">
              Don’t have an account? <span style={{ color: "#28a745" }}>Register here</span>
            </p> */}

            {loginError && (
              <div className="alert alert-danger">{loginError}</div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </div>

              {/* <div className="text-end mb-3">
                <span style={{ color: "red", fontSize: "14px" }}>
                  Forgot password?
                </span>
              </div> */}

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  borderRadius: "25px",
                  padding: "10px"
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="col-md-7 d-none d-md-block p-0">
          <img
            src={img1}   // <-- change image path if needed
            alt="Login"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover"
            }}
          />
        </div>

      </div>
    </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Admin Dashboard</h2>

      {/* Add Job Form */}
      <div className="card p-3 mb-4 shadow-sm">
        <h5>Add New Job</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-md-6">
              <input
                className="form-control"
                name="title"
                placeholder="Job Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="workMode"
                placeholder="Work Mode (Remote/Onsite)"
                value={formData.workMode}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="salaryRange"
                placeholder="Salary Range"
                value={formData.salaryRange}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="benefits"
                placeholder="Benefits (comma separated)"
                value={formData.benefits}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="responsibilities"
                placeholder="Responsibilities (comma separated)"
                value={formData.responsibilities}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="requiredSkills"
                placeholder="Required Skills (comma separated)"
                value={formData.requiredSkills}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="techSkills"
                placeholder="Tech Skills (comma separated)"
                value={formData.techSkills}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="softSkills"
                placeholder="Soft Skills (comma separated)"
                value={formData.softSkills}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Add Job
          </button>
        </form>
      </div>

      {/* Jobs List */}
      <div className="card p-3 shadow-sm">
        <h5>All Jobs</h5>
        <table className="table table-bordered mt-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.salaryRange}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No jobs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
