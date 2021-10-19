import React from "react";
import "../styles/styles.css";
import { Header } from "./Header";
import { TasksBoard } from "./TasksBoard";
import { TaskCard } from "./TaskCard";
import { MenuCard } from "./MenuCard";
import { PortModal } from "./PortModal";
import { EventCard } from "./EventCard";

export const TASK_STATUSES = {
  todo: "todo",
  in_progress: "in_progress",
  done: "done",
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveTaskCard: false,
      isActiveMenuCard: false,
      isActivePortModal: false,
      tasksArray: [],
      activeTask: {},
      menuItems: { title: "", text: "", nameList: "" },
    };
  }

  componentDidMount() {
    const { login } = this.props;
    const user = JSON.parse(localStorage.getItem("usersArray")).find(
      (item) => item.login === login
    );
    if (user.hasOwnProperty("tasksArray")) {
      this.setState({
        tasksArray: user.tasksArray,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { tasksArray } = this.state;
    if (tasksArray !== prevState.tasksArray) {
      const { login } = this.props;
      const users = JSON.parse(localStorage.getItem("usersArray"));
      const usersArray = users.map((user) => {
        if (user.login === login) {
          user.tasksArray = tasksArray;
        }
        return user;
      });
      localStorage.setItem("usersArray", JSON.stringify(usersArray));
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

  handleEdit = (obj) => {
    const tasksArray = this.state.tasksArray;
    const newTasksArray = tasksArray.map((task) => {
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
      tasksArray: newTasksArray,
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

  handleToggleMenuCard = () => {
    this.setState((prevState) => ({
      isActiveMenuCard: !prevState.isActiveMenuCard,
    }));
  };

  handleClickItemMenu = ({ target }) => {
    const name = target.dataset.name;
    if (name) {
      switch (name) {
        case "выход из аккаунта":
          this.setState({
            isActivePortModal: true,
            menuItems: {
              title: "Выход из аккаунта",
              text: "действительно выходим?",
              nameList: name,
            },
          });
          break;
        default:
          this.setState({
            isActivePortModal: true,
            menuItems: {
              title: "Удаление списка",
              text: `очистить список ${name}?`,
              nameList: name,
            },
          });
      }
    }
  };

  handelPerformMenu = (nameList) => {
    const { tasksArray } = this.state;
    let newTasksArray = [];
    switch (nameList) {
      case "выход из аккаунта":
        this.props.onExitAccount();
        break;
      default:
        if (nameList !== "all") {
          newTasksArray = tasksArray.filter(
            (item) => item.position !== nameList
          );
        }
        this.setState({
          tasksArray: newTasksArray,
          isActivePortModal: false,
          isActiveMenuCard: false,
        });
    }
  };

  handleCloseModalCard = () => {
    this.setState({
      isActivePortModal: false,
    });
  };

  render() {
    const {
      isActiveTaskCard,
      isActiveMenuCard,
      isActivePortModal,
      tasksArray,
      activeTask,
      menuItems: { title, text, nameList },
    } = this.state;
    return (
      <div>
        <Header onClick={this.handleToggleMenuCard} />
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
        {isActiveMenuCard && (
          <MenuCard
            onClick={this.handleToggleMenuCard}
            onClickMenu={this.handleClickItemMenu}
          />
        )}
        {isActivePortModal && (
          <PortModal>
            <EventCard
              title={title}
              text={text}
              onClick={() => this.handelPerformMenu(nameList)}
              onClickCancel={this.handleCloseModalCard}
            />
          </PortModal>
        )}
      </div>
    );
  }
}
