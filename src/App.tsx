import reactLogo from "./assets/logo.svg";
import styles from "./App.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { List } from "./components/List/List";
import { ChangeEvent, FormEvent, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [globalTaskCount, setGlobalTaskCount] = useState(0);

  return (
    <>
      <header className={styles.header}>
        <img
          src={reactLogo}
          alt="Taska logo"
          className={styles.logo}
          width={146}
          height={48}
        />
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            aria-label="Nome da tarefa"
            className={styles.input}
            onChange={handleChangeTaskName}
            value={taskName}
          />
          <button
            className={styles.submitButton}
            disabled={taskName.length === 0}
          >
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>
        <section>
          <div className={styles.listHeader}>
            <p>
              Tarefas criadas <span>0</span>
            </p>
            <p>
              Concluídas <span>0</span>
            </p>
          </div>
          <List
            tasks={tasks}
            onToggleTaskCompletion={handleToggleTaskCompletion}
            onRemoveTask={handleRemoveTask}
          />
        </section>
      </main>
    </>
  );

  function handleToggleTaskCompletion(taskId: number) {
    setTasks((current) =>
      current.map((t) => {
        if (t.id === taskId) {
          return {
            ...t,
            completed: !t.completed,
          };
        }

        return t;
      })
    );
  }

  function handleRemoveTask(taskId: number) {
    setTasks((current) => current.filter((t) => t.id !== taskId));
  }

  function handleChangeTaskName(event: ChangeEvent<HTMLInputElement>) {
    setTaskName(event.currentTarget.value);
  }

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks((current) => [
      {
        id: globalTaskCount,
        title: taskName,
        completed: false,
      },
      ...current,
    ]);

    setGlobalTaskCount((current) => current + 1);
    setTaskName("");
  }
}

export default App;
