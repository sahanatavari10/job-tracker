import React, { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import StatusFilter from "./components/StatusFilter";

function App() {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const filteredJobs = statusFilter
    ? jobs.filter((job) => job.status === statusFilter)
    : jobs;

  const uniqueStatuses = [...new Set(jobs.map((job) => job.status))];

  const deleteJob = (indexToRemove) => {
    const updated = jobs.filter((_, index) => index !== indexToRemove);
    setJobs(updated);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Job Tracker</h1>
      <JobForm onAddJob={addJob} />
      <StatusFilter
        statuses={uniqueStatuses}
        selectedStatus={statusFilter}
        onChange={setStatusFilter}
      />
      <JobList jobs={filteredJobs} onDelete={deleteJob} />
    </div>
  );
}

export default App;

const containerStyle = {
  padding: "2rem",
  maxWidth: "600px",
  margin: "auto"
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
};
