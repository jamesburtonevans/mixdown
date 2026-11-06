export type Status = "none" | "todo" | "in-progress" | "in-review" | "done";

export const STAGES = ["write", "record", "mix", "master"] as const;

export type Task = {
  id: string,
  name: string,
  status: Status,
};

export type Track = {
  id: string,
  name: string,
  write: Status,
  record: Status,
  mix: Status,
  master: Status,
};

export type Release = {
  id: string,
  name: string,
  releaseDate: string | null, //null means no date set
  tasks: Task[],
  tracks: Track[],
};
