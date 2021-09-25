import "./styles.css";

function Task(props) {
  return (
    <div className="task" id={props.id}>
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
        />
      ))}
    </div>
  );
}
