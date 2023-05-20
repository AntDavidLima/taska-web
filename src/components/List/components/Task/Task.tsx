import styles from "./Task.module.css";

export function ListTask() {
  return (
    <li>
      <div className={styles.checkbox}>
        <input type="checkbox" id="toggle-task-completion" />
        <label htmlFor="toggle-task-completion">
          Marcar ou desmarcar tarefa como concluída
        </label>
      </div>
    </li>
  );
}
