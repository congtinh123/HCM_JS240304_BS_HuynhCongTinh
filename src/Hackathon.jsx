import React, { useState } from "react";
import InputJobs from "./InputJobs";
import ListJobs from "./ListJobs";

export default function Hackathon() {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );
  const [error, setError] = useState("");
  const addJobs = (event) => {
    event.preventDefault();
    const jobName = event.target[0].value;
    if (jobName == "") {
      setError("Tên công việc không được để trống");
    } else {
      const newJob = {
        id: Math.floor(Math.random() * 1000),
        jobName: jobName,
        isChecked: false,
      };
      setJobs([...jobs, newJob]);
      setError("");
      event.target.reset();
      alert("Thêm công việc thành công!");
      localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
    }
  };
  const handleDelete = (id) => {
    const job = jobs.find((job) => job.id == id);
    if (window.confirm(`Bạn có muốn xóa công việc < ${job.jobName} > không?`)) {
      const deleteJob = jobs.filter((job) => job.id != id);
      setJobs([...deleteJob]);
      localStorage.setItem("jobs", JSON.stringify([...deleteJob]));
    }
  };

  const handleCheck = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    jobs[index].isChecked = !jobs[index].isChecked;
    setJobs([...jobs]);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };
  let count = 0;
  for (let i in jobs) {
    if (jobs[i].isChecked === true) count++;
  }

  const handleEdit = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    const editJobname = prompt(
      "Nhập công việc cần chỉnh sửa",
      jobs[index].jobName
    );
    if (editJobname !== null) {
      if (editJobname !== "") {
        jobs[index].jobName = editJobname;
        setJobs([...jobs]);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        alert("Chỉnh sửa thành công!");
      } else {
        alert("Nội dung chỉnh sửa không được để trống!");
      }
    }
  };
  return (
    <div>
      <h1>Danh sách công việc</h1>
      <InputJobs addJobs={addJobs} error={error} />
      <ListJobs
        listJob={jobs}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        count={count}
        handleEdit={handleEdit}
      />
    </div>
  );
}
