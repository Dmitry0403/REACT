import { Card } from "components/Card";
import React from "react";

export class EditableCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleBlur = () => {
    this.props.onEditEnd(this.state.value);
  };

  render() {
    return (
      <Card
        title="todo"
        isActive={this.props.isActive}
        onChange={this.handleInput}
        onBlur={this.handleBlur}
        onClick={this.props.onClick}
        onClickCancel={this.props.onClickCancel}
        tasksArray={this.props.tasksArray}
      />
    );
  }
}
