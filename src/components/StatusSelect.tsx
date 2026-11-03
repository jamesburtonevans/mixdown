import type { Status } from "../types";

type StatusSelectProps = {
  value: Status,
  onChange: (newStatus: Status) => void;
  label: string,
}

export function StatusSelect({ value, onChange, label }: StatusSelectProps) {
  return (
    <select value={value} aria-label={label} onChange={(event) => onChange(event.target.value as Status)}>
      <option value="none"></option>
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="in-review">In Review</option>
      <option value="done">Done</option>
    </select>
  );
}
