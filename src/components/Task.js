import React from "react";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.details}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
