import React, { useState } from "react";
import Navbar from "../Components/Navbarjob";
import JobList from "./JobList";

function App() {
  const [searchParams, setSearchParams] = useState({
    search: "",
    location: "",
  });

  return (
    <>
    <div style={{marginTop:"80px"}}>
      <Navbar onSearch={setSearchParams} />
      <JobList searchParams={searchParams}/>
      </div>
    </>
  );
}

export default App;
