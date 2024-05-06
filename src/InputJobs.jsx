import React from "react";
import PropsTypes from "prop-types";
import "./Hackathon.css";

export default function InputJobs({ addJobs, error }) {
  return (
    <form onSubmit={addJobs}>
      <input
        className="form_input"
        type="text"
        placeholder="Nhập tên công việc"
        autoFocus
      />
      <button className="form_btn" type="submit">
        thêm
      </button>
      <p className="form_p">
        {error}
      </p>
    </form>
  );
}
InputJobs.propTypes = {
  addJobs: PropsTypes.func.isRequired,
  error: PropsTypes.string,
};
