import React from "react";

const StatusFilter = ({ statuses, selectedStatus, onChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="status-filter">Filter by Status: </label>
      <select
        id="status-filter"
        value={selectedStatus}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "8px", marginLeft: "10px" }}
      >
        <option value="">All</option>
        {statuses.map((status, idx) => (
          <option key={idx} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;
