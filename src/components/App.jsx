import "../styles/styles.css";
import { Header } from "./Header";
import { TasksBoard } from "./TasksBoard";

export function App() {
  return (
    <div>
      <Header />
      <TasksBoard />
    </div>
  );
}
