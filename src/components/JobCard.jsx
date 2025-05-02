import React from "react";

const JobCard = (job, onDelete) => {
  return (
    <div style={cardStyle}>
      <h3>
        {job.role} @ {job.company}
      </h3>
      <p>
        Status: <strong>{job.status}</strong>
      </p>
      <button
        onClick={onDelete}
        style={buttonStyle}
      >
        Delete
      </button>
    </div>
  );
};

export default JobCard;

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "6px",
  padding: "1rem",
  marginBottom: "1rem",
  backgroundColor: "#f9f9f9",
};

const buttonStyle = {
  background: "red",
  color: "white",
  padding: "6px 12px",
  border: "none",
  borderRadius: "4px",
};
