import React from 'react';

const JobCard = (job) => {
  const { role, company, status } = job;
  return (
    <div
      style={{ ...cardStyle, borderLeft: `6px solid ${statusColor(status)}` }}
    >
      <h3 style={titleStyle}>
        {role} at {company}
      </h3>
      <p style={{ margin: 0 }}>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

export default JobCard;

const statusColor = (status) => {
  switch (status) {
    case "Applied":
      return "#007bff"; // blue
    case "Interview":
      return "#ffc107"; // yellow
    case "Offer":
      return "#28a745"; // green
    case "Rejected":
      return "#dc3545"; // red
    default:
      return "#6c757d"; // gray
  }
};

const cardStyle = {
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

const titleStyle = {
  margin: "0 0 5px 0",
};
