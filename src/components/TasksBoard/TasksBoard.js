import React from "react";
import "./styles.css";
import { Card } from "../Card";
import { EditableCard } from "components/EditableCard/EditableCard";
import { TASK_STATUSES } from "components/App";
import { ErrorBoundary } from "components/ErrorBoundary/ErrorBoundary";

export function TasksBoard(props) {
  const tasksArray = props.tasksArray;
  return (
  <ErrorBoundary>  
    <div className="main wrapper">
      <div className="container-global">
        <div className="container-cards">
          <EditableCard
            onEditEnd={props.onEditEnd}
            tasksArray={tasksArray.filter((task) => task.position === TASK_STATUSES.todo)}
            onClickTask={props.onClickTask}
          />
          <Card
            title="in_progress"
            onClickTask={props.onClickTask}
            tasksArray={tasksArray.filter(
              (task) => task.position === TASK_STATUSES.in_progress
            )}
          />
          <Card
            title="done"
            onClickTask={props.onClickTask}
            tasksArray={tasksArray.filter((task) => task.position === TASK_STATUSES.done)}
          />
        </div>
      </div>
    </div>
  </ErrorBoundary>  
  );
}
