import React, { useState } from "react";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  marginBottom: "2rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1rem",
  backgroundColor: "#f1f1f1",
};

const inputStyle = {
  padding: "0.5rem",
  fontSize: "1rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const selectStyle = {
  ...inputStyle,
};

const buttonStyle = {
  padding: "0.6rem",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const JobForm = ({ onAddJob }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !role) return;

    onAddJob({ company, role, status });

    // Reset form fields
    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select
        style={selectStyle}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit" style={buttonStyle}>
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
