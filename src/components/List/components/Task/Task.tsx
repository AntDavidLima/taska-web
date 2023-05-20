import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  task: Task;
  onToggleTaskCompletion: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
}

export function ListTask({
  task,
  onToggleTaskCompletion,
  onRemoveTask,
}: TaskProps) {
  return (
    <li className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={`toggle-task-${task.id}-completion`}
        checked={task.completed}
        onChange={() => onToggleTaskCompletion(task.id)}
      />
      <label htmlFor={`toggle-task-${task.id}-completion`}>
        Marcar ou desmarcar tarefa como concluída
      </label>
      <p>{task.title}</p>
      <button
        type="button"
        aria-label="Remover tarefa"
        onClick={() => onRemoveTask(task.id)}
      >
        <Trash size={24} />
      </button>
    </li>
  );
}
