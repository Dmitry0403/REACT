import React from "react";
import "./styles.css";
import { Card } from "../Card";
import { EditableCard } from "components/EditableCard/EditableCard";

export function TasksBoard(props) {
  const tasksArray = props.tasksArray;
  return (
    <div className="main wrapper">
      <div className="container-global">
        <div className="container-cards">
          <EditableCard
            onEditEnd={props.onEditEnd}
            tasksArray={tasksArray.filter((task) => task.position === "todo")}
            onClickTask={props.onClickTask}
          />
          <Card
            title="in_progress"
            onClickTask={props.onClickTask}
            tasksArray={tasksArray.filter(
              (task) => task.position === "in_progress"
            )}
          />
          <Card
            title="done"
            onClickTask={props.onClickTask}
            tasksArray={tasksArray.filter((task) => task.position === "done")}
          />
        </div>
      </div>
    </div>
  );
}
