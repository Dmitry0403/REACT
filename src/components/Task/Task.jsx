import "./styles.css";

function Task(props) {
  return (
    <div className={`task ${props.class}`} id={props.id}>
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
          class={task.position}
          id={task.id}
          text={task.title}
        />
      ))}
    </div>
  );
}
