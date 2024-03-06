// eslint-disable-next-line no-unused-vars
import React from "react";
import TaskComponent from "../pure/task";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";


const TaskListComponent = () => {
  const defaultTask = new Task(
    "Mi Primera Tarea",
    "Default Description",
    true,
    LEVELS.NORMAL
  );

  const changeState = () =>{
    console.log("Cambiar estado de una tarea");
  }

  return (
    <div>
      {/*Aplicar un For/Map para renderizar una lista*/}
      <div><h1>Your Taks:</h1></div>
      <TaskComponent task={ defaultTask } />
    </div>
  );
};

export default TaskListComponent;
