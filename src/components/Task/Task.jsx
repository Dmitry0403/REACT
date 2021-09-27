import css from "./styles.module.css";

function Task(props) {
  return (
    <div className={css.task} id={props.id} onClick={props.onClickTask}>
      {props.text}
    </div>
  );
}

export function Tasks(props) {
  const tasksArray = props.tasksArray;
  return (
    <div className="card-tasks">
      {tasksArray.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.title}
          onClickTask={() => props.onClickTask(task.id)}
        />
      ))}
    </div>
  );
}
