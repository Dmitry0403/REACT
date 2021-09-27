import { Card } from "components/Card";
import React from "react";

export class EditableCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      value: "",
    };
  }

  handleClick = () => {
    this.setState({
      isActive: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isActive: false,
    });
  };
  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleBlur = () => {
    this.props.onEditEnd(this.state.value);
    this.setState({
      value: "",
      isActive: false,
    });
  };

  render() {
    const isActive = this.state.isActive;
    return (
      <Card
        title="todo"
        isActive={isActive}
        onChange={this.handleInput}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onClickCancel={this.handleCancel}
        onClickTask={this.props.onClickTask}
        tasksArray={this.props.tasksArray}
      />
    );
  }
}
