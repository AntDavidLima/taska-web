import { ListEmpty } from "./components/Empty/Empty";
import { ListTask } from "./components/Task/Task";

import styles from "./List.module.css";

interface ListProps {
  tasks: Task[];
  onToggleTaskCompletion: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
}

export function List({
  tasks,
  onToggleTaskCompletion,
  onRemoveTask,
}: ListProps) {
  if (tasks.length === 0) return <ListEmpty />;

  return (
    <ul className={styles.container}>
      {tasks.map((task) => (
        <ListTask
          key={task.id}
          task={task}
          onToggleTaskCompletion={onToggleTaskCompletion}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </ul>
  );
}
