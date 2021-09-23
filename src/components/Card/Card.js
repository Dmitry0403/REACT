import React from "react";
import "./styles.css";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
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

  render() {
    const isActive = this.state.isActive;
    return (
      <div className="card">
        <div className="card__title">
          <div className="card__title-text">{this.props.title}</div>
        </div>
        <div className="card_list">
          <div className="card_list-tasks" id={this.props.title}>
            <div className="card-tasks"></div>
          </div>
          <div className="textarea">{isActive && <Input />}</div>
        </div>
        {this.props.title === "todo" && (
          <div className="card__button">
            <Button icon="" text="+Добавить" onClick={this.handleClick} />
            <Button icon="" text="отмена" onClick={this.handleCancel} />
          </div>
        )}
      </div>
    );
  }
}
