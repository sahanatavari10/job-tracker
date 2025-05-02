import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import StatusFilter from "./components/StatusFilter";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const deleteJob = (indexToRemove) => {
    const updated = jobs.filter((_, index) => index !== indexToRemove);
    setJobs(updated);
  };

  const filteredJobs = statusFilter
    ? jobs.filter((job) => job.status === statusFilter)
    : jobs;

  const uniqueStatuses = [...new Set(jobs.map((job) => job.status))];

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Job Tracker</h1>
      <JobForm onAddJob={addJob} />
      <StatusFilter
        statuses={uniqueStatuses}
        selectedStatus={statusFilter}
        onChange={setStatusFilter}
      />
      <JobList jobs={filteredJobs} onDelete={deleteJob} />
    </div>
  );
};

export default App;
