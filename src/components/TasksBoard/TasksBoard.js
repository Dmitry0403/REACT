import React from "react";
import "./styles.css";
import { Card } from "../Card";
import { EditableCard } from "components/EditableCard/EditableCard";

export class TasksBoard extends React.Component {
  state = {
    isActive: false,
    tasksArray: [],
  };

  componentDidMount() {
    if (localStorage.getItem("tasksArray")) {
      const tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
      this.setState({
        tasksArray,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const tasksArray = this.state.tasksArray;
    if (tasksArray !== prevProps.tasksArray) {
      localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    }
  }

  handleClick = () => {
    this.setState({
      isActive: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isActive: false,
      value: "",
    });
  };

  handleEditEnd = (value) => {
    if (!value) return;
    const tasksArray = this.state.tasksArray;
    this.setState({
      tasksArray: tasksArray.concat([
        { title: value, position: "todo", id: Date.now() },
      ]),
      isActive: false,
    });
  };

  render() {
    const isActive = this.state.isActive;
    const tasksArray = this.state.tasksArray;
    return (
      <div className="main wrapper">
        <div className="container-global">
          <div className="container-cards">
            <EditableCard
              isActive={isActive}
              onEditEnd={this.handleEditEnd}
              onClick={this.handleClick}
              onClickCancel={this.handleCancel}
              tasksArray={tasksArray.filter((task) => task.position === "todo")}
            />
            <Card
              title="in_progress"
              tasksArray={tasksArray.filter(
                (task) => task.position === "in_progress"
              )}
            />
            <Card
              title="done"
              tasksArray={tasksArray.filter((task) => task.position === "done")}
            />
          </div>
        </div>
      </div>
    );
  }
}
