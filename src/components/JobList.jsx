import React from "react";
import JobCard from "./JobCard";

const JobList = (jobs) => {
  if (!Array.isArray(jobs)) return <p>No jobs to display.</p>;
  if (jobs.length === 0) {
    return <p>No job applications yet. Add some!</p>;
  }
  return (
    <div style={listStyle}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;

const listStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};
