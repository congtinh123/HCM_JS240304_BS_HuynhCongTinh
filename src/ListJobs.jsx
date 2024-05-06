import React from "react";
import PropsType from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Hackathon.css";

export default function ListJobs({
  listJob,
  handleCheck,
  handleEdit,
  handleDelete,
  count,
}) {
  return (
    <div>
      <ul>
        {listJob.length > 0 ? (
          listJob?.map((job) => (
            <li key={job.id}>
              <input
                type="checkbox"
                onClick={() => handleCheck(job.id)}
                checked={job.isChecked}
              />
              <span
                className="list_span"
                style={{
                  textDecoration: job.isChecked ? "line-through" : "none",
                }}
              >
                {job.jobName}
              </span>
              <div className="list_icon">
                <EditIcon
                  className="list_icon--edit"
                  onClick={() => handleEdit(job.id)}
                />
                <DeleteIcon
                  className="list_icon--delete"
                  onClick={() => handleDelete(job.id)}
                />
              </div>
            </li>
          ))
        ) : (
          <img
            src="https://t4.ftcdn.net/jpg/05/86/21/03/360_F_586210337_WOGOw0l7raEB8F61Muc4hWbvVcyQdk9Z.jpg"
            height={290}
            width={350}
          ></img>
        )}
      </ul>
      {listJob.length > 0 ? (
        <p className="list_p">
          Công việc đã hoàn thành:
          <span className="list_span2">
            {count}/{listJob.length}
          </span>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
ListJobs.propTypes = {
  listJob: PropsType.array,
  handleCheck: PropsType.func,
  handleDelete: PropsType.func,
  count: PropsType.number,
  handleEdit: PropsType.func,
};
