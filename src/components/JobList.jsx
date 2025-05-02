import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, onDelete }) => {
  if (!Array.isArray(jobs)) return <p>No jobs to display.</p>;
  return (
    <div style={listStyle}>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} onDelete={() => onDelete(index)} />
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
