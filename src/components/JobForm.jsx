import React, { useState } from "react";

const JobForm = ({ onAddJob }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !role) return;

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
    };

    onAddJob(newJob);
    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <form onSumbit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeHolder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={inputStyle}
      ></input>
      <input
        type="text"
        placeHolder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={inputStyle}
      ></input>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={selectStyle}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button type="submit" style={buttonStyle}>Add Job</button>
    </form>
  );
};

export default JobForm;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "20px",
  width: "300px",
};

const inputStyle = {
  padding: "8px",
  fontSize: "1rem",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const selectStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "10px",
  width: "100%",
};
