import "./styles.css";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Tasks } from "../Task";

export function Card(props) {
  const isActive = props.isActive;
  const tasksArray = props.tasksArray;
  return (
    <div className="card">
      <div className="card__title">
        <div className="card__title-text">{props.title}</div>
      </div>
      <div className="card_list">
        <div className="card_list-tasks" id={props.title}>
          {tasksArray && <Tasks tasksArray={tasksArray} onClickTask={props.onClickTask}/>}
        </div>
        <div className="textarea">
          {isActive && (
            <Input onChange={props.onChange} onBlur={props.onBlur} />
          )}
        </div>
      </div>
      {props.title === "todo" && (
        <div className="card__button">
          <Button icon="" text="+Добавить" onClick={props.onClick} />
          <Button icon="" text="отмена" onClick={props.onClickCancel} />
        </div>
      )}
    </div>
  );
}
