import { ListEmpty } from "./components/Empty/Empty";
import { ListTask } from "./components/Task/Task";

interface ListProps {
  tasks: Task[];
}

export function List({ tasks }: ListProps) {
  if (tasks.length === 0) return <ListEmpty />;

  return (
    <ul>
      {tasks.map((task) => (
        <ListTask key={task.id} task={task} />
      ))}
    </ul>
  );
}
