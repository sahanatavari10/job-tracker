import React from "react";

const JobCard = (job, onDelete) => {
  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>
        {job.role} at {job.company}
      </h3>
      <p>
        Status: <strong>{job.status}</strong>
      </p>
      <button onClick={onDelete} className="btn btn-danger">
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

const titleStyle = {
  margin: "0 0 5px 0",
};
