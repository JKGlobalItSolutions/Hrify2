import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
// import hrifyLogo from "../assets/logo/Hrify-logo.png"; // adjust path
import Navbg from "../assets/Navbar/Nav-back.png"; // adjust path

const Navbar = ({ onSearch }) => {
  const jobTitleRef = useRef();
  const countryRef = useRef();

  const handleSearch = () => {
    const search = jobTitleRef.current.value;
    const location = countryRef.current.value;
    onSearch({ search, location });
  };

  return (
  <div style={{ width: "100%" }}>
    {/* Header with logo */}
    {/* <header style={{ background: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
      <div
        className="container-fluid"
        style={{
          maxWidth: "100%",
          margin: "0",
          padding: "16px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: "0px",
          paddingLeft: "20px"
        }}

      >
        <img
          src={hrifyLogo}
          alt="HRIFY Logo"
          style={{ height: "56px", objectFit: "contain" }} // Increased logo height here
        />
      </div>
    </header> */}


    {/* Background banner */}
    <div className="container-fluid"
      style={{
        width: "100%",
        backgroundImage: `url(${Navbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "16px 0 20px 0",
        minHeight: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px"
      }}
    >
      {/* Search Filters */}
      <div
        className="container-fluid"
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="d-flex flex-wrap align-items-center"
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            padding: "10px 22px",
            gap: "16px",
            minHeight: "56px",
            width: "100%",
          }}
        >
          {/* Job Title */}
          <input
            ref={jobTitleRef}
            type="text"
            placeholder="Job Title,Keyword"
            style={{
              flex: "1 1 200px",
              minWidth: "150px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          />

          {/* Country */}
          <select
            ref={countryRef}
            style={{
              flex: "1 1 180px",
              minWidth: "150px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#f7fafc",
            }}
          >
            <option>Select Country</option>
            <option>Argentina</option>
            <option>Brazil</option>
            <option>Canada</option>
            <option>India</option>
            <option>United States</option>

          </select>

          {/* Search Button */}

        </div>
      </div>
      <div>
        <button
          onClick={handleSearch}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#0096b2",
            color: "#fff",
            fontWeight: "600",
            fontSize: "1.08rem",
            border: "none",
            borderRadius: "6px",
            padding: "8px 30px",
            minWidth: "120px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
            marginTop: "20px"
          }}
        >
          <FaSearch /> Search
        </button>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
