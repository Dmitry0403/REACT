import "./styles.css";
import { Button } from "../common/Button";
import React from "react";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <div className="card__title">
          <div className="card__title-text">{this.props.title}</div>
        </div>
        <div className="card_list">
          <div className="card_list-tasks" id={this.props.title}>
            <div className="card-tasks"></div>
          </div>
          <div className="textarea"></div>
        </div>
        {this.props.title === "todo" && (
          <div className="card__button">
            <Button icon="" text="+Добавить" />
            <Button icon="" text="отмена" />
          </div>
        )}
      </div>
    );
  }
}
