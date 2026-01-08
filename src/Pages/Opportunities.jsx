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
      <Navbar onSearch={setSearchParams} />
      <JobList searchParams={searchParams}/>
    </>
  );
}

export default App;
