import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs"));
    if (storedJobs) setJobs(storedJobs);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleAddJobs = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Job Tracker</h1>
      <JobForm onAddJob={handleAddJobs}></JobForm>
      <JobList jobs={jobs}></JobList>
    </div>
  );
}

export default App;

const containerStyle = {
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
};
