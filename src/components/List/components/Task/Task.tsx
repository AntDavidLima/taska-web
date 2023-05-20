import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  task: Task;
}

export function ListTask({ task }: TaskProps) {
  return (
    <li className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="toggle-task-completion"
        checked={task.completed}
      />
      <label htmlFor="toggle-task-completion">
        Marcar ou desmarcar tarefa como concluída
      </label>
      <p>{task.title}</p>
      <button type="button">
        <Trash size={24} />
      </button>
    </li>
  );
}
