import React from "react";
import "../styles/styles.css";
import { Header } from "./Header";
import { TasksBoard } from "./TasksBoard";
import { TaskCard } from "./TaskCard";

export const TASK_STATUSES = {
  todo: "todo",
  in_progress: "in_progress",
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

  componentDidUpdate() {
    const tasksArray = this.state.tasksArray;
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
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

  handleEdit = (obj) => {
    const tasksArray = this.state.tasksArray;
    tasksArray.map((task) => {
      if (task.id === obj.id) {
        task.title = obj.title;
        task.description = obj.description;
        task.comment = obj.comment;
        task.date = obj.date;
        task.users = obj.users;
      }
      return task;
    });
    this.setState({
      tasksArray,
      isActiveTaskCard: false,
    });
  };

  handleEditMoving = (obj, position) => {
    const tasksArray = this.state.tasksArray;
    tasksArray.map((task) => {
      if (task.id === obj.id) {
        task.position = position;
      }
      return task;
    });
    this.setState({
      tasksArray,
      isActiveTaskCard: false,
    });
  };

  handleEditRemoving = (obj) => {
    const tasksArray = this.state.tasksArray;
    const newTasksArray = tasksArray.filter((task) => task.id !== obj.id);
    this.setState({
      tasksArray: newTasksArray,
      isActiveTaskCard: false,
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
            tasksArray={tasksArray}
            task={activeTask}
            onCloseTaskCard={this.handleCloseTaskCard}
            onEdit={this.handleEdit}
            onEditMoving={this.handleEditMoving}
            onEditRemoving={this.handleEditRemoving}
          />
        )}
      </div>
    );
  }
}
