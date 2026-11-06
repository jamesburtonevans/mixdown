import type { Task } from "../types";
import { StatusSelect } from "./StatusSelect";

type TaskRowProps = {
  task: Task;
  onUpdate: (changes: Partial<Task>) => void;
  onDelete: () => void;
};

export function TaskRow({ task, onUpdate, onDelete }: TaskRowProps) {
  return (
    <li className="task-row">
      <span className="task-row__name">{task.name}</span>
      <StatusSelect
        value={task.status}
        label={`${task.name} status`}
        onChange={(newStatus) => onUpdate({ status: newStatus })}
      />
      <button className="task-row__delete" type="button" onClick={onDelete}>
        Delete {task.name}
      </button>
    </li>
  );
}
