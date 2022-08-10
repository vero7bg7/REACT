import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "default description",
    false,
    LEVELS.NORMAL
  );

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* Aplicar for/map para renderizar tareas */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
