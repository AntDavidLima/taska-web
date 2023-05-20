import reactLogo from "./assets/logo.svg";
import styles from "./App.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { List } from "./components/List/List";
import { useState } from "react";

function App() {
  const globalTaskCount = 0;

  const [tasks, setTasks] = useState([
    {
      id: 0,
      completed: true,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae non est delas accusantium, numquam in molestias recusandae sequi ad amet saepe fugiat! Mollitia est cum sint hic debitis asperiores.",
    },
    {
      id: 1,
      completed: false,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae non est delas accusantium, numquam in molestias recusandae sequi ad amet saepe fugiat! Mollitia est cum sint hic debitis asperiores.",
    },
    {
      id: 2,
      completed: true,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae non est delas accusantium, numquam in molestias recusandae sequi ad amet saepe fugiat! Mollitia est cum sint hic debitis asperiores.",
    },
  ]);

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
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            aria-label="Nome da tarefa"
            className={styles.input}
          />
          <button className={styles.submitButton}>
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
          <List tasks={tasks} />
        </section>
      </main>
    </>
  );
}

export default App;
