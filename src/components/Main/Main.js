import React from "react";
import "./styles.css";
import { Card } from "../Card";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      tasksArray: [],
      value: "",
    };
  }
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

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleBlur = () => {
    const title = this.state.value;
    if (!title) return;
    const tasksArray = this.state.tasksArray.slice();
    this.setState({
      tasksArray: tasksArray.concat([
        { title: title, position: "todo", id: Date.now() },
      ]),
      isActive: false,
    });
  };

  render() {
    const isActive = this.state.isActive;
    const tasksArray = this.state.tasksArray;
    return (
      <main className="main wrapper">
        <div className="container-global">
          <div className="container-cards">
            <Card
              title="todo"
              isActive={isActive}
              onChange={this.handleInput}
              onBlur={this.handleBlur}
              onClick={this.handleClick}
              onClickCancel={this.handleCancel}
              tasksArray={tasksArray.filter(
                (tasks) => tasks.position === "todo"
              )}
            />
            <Card
              title="in_progress"
              tasksArray={tasksArray.filter(
                (tasks) => tasks.position === "in_progress"
              )}
            />
            <Card
              title="done"
              tasksArray={tasksArray.filter(
                (tasks) => tasks.position === "done"
              )}
            />
          </div>
        </div>
      </main>
    );
  }
}
