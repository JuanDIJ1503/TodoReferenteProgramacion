// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripción: {task.description}</h3>
      <h4>Nivel de la tarea: {task.level}</h4>
      <h5>This tas is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
