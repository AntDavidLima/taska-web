import { ClipboardText } from "@phosphor-icons/react";

import styles from "./styles.module.css";

export function Empty() {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} className={styles.icon} />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
