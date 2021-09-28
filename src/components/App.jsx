import React from "react";
import "../styles/styles.css";
import { Header } from "./Header";
import { TasksBoard } from "./TasksBoard";
import { TaskCard } from "./TaskCard";

export const TASK_STATUSES = {
  todo: "todo",
  inProgress: "in_progress",
  done: "done",
};

export class App extends React.Component {
  state = {
    isActiveTaskCard: false,
    tasksArray: [],
    activeTask: {},
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

  handleEditEnd = (value) => {
    if (!value.trim()) return;
    const tasksArray = this.state.tasksArray;
    this.setState({
      tasksArray: tasksArray.concat([
        { title: value, position: "todo", id: Date.now() },
      ]),
      isActive: false,
    });
  };

  handleEdit = (value, id, place) => {
    if (!value.trim()) return;
    const tasksArray = this.state.tasksArray;
    tasksArray.map((task) => {
      if (task.id === id) {
        task[place] = value;
      }
      return task;
    });
    this.setState({
      tasksArray,
    });
  };

  handleClickTask = (id) => {
    const tasksArray = this.state.tasksArray;
    const activeTask = tasksArray.filter((task) => task.id === id);
    this.setState({
      isActiveTaskCard: true,
      activeTask: activeTask[0],
    });
  };

  handleCloseTaskCard = () => {
    this.setState({
      isActiveTaskCard: false,
    });
  };

  render() {
    const { isActiveTaskCard, tasksArray, activeTask } = this.state;
    return (
      <div>
        <Header />
        <TasksBoard
          tasksArray={tasksArray}
          onEditEnd={this.handleEditEnd}
          onClickTask={this.handleClickTask}
        />
        {isActiveTaskCard && (
          <TaskCard
            onCloseTaskCard={this.handleCloseTaskCard}
            task={activeTask}
            onEdit={this.handleEdit}
          />
        )}
      </div>
    );
  }
}
