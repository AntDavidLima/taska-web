import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function ListTask() {
  return (
    <li className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="toggle-task-completion"
      />
      <label htmlFor="toggle-task-completion">
        Marcar ou desmarcar tarefa como concluída
      </label>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        repudiandae non est delectus accusantium, numquam in molestias
        recusandae sequi ad amet saepe fugiat! Mollitia est cum sint hic debitis
        asperiores.
      </p>
      <button type="button">
        <Trash size={24} />
      </button>
    </li>
  );
}
