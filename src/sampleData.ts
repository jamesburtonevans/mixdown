import type { Release } from "./types";

export const sampleReleases: Release[] = [
  {
    id: crypto.randomUUID(),
    name: "Sample Album 1",
    releaseDate: "2026-11-01",
    tasks: [
      {
        id: crypto.randomUUID(),
        name: "Artwork",
        status: "in-review"
      },
      {
        id: crypto.randomUUID(),
        name: "Distribute",
        status: "todo"
      },
    ],
    tracks: [
      {
        id: crypto.randomUUID(),
        name: "Sample Song 1",
        write: "done",
        record: "done",
        mix: "in-review",
        master: "todo",
      },
      {
        id: crypto.randomUUID(),
        name: "Sample Song 2",
        write: "done",
        record: "in-progress",
        mix: "todo",
        master: "none",
      },
      {
        id: crypto.randomUUID(),
        name: "Sample Song 3",
        write: "in-progress",
        record: "todo",
        mix: "none",
        master: "none",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Sample Song 4 - Single",
    releaseDate: "2026-08-23",
    tasks: [
      {
        id: crypto.randomUUID(),
        name: "Artwork",
        status: "done"
      },
      {
        id: crypto.randomUUID(),
        name: "Distribute",
        status: "done"
      },
    ],
    tracks: [
      {
        id: crypto.randomUUID(),
        name: "Sample Song 4",
        write: "done",
        record: "done",
        mix: "done",
        master: "done",
      },
    ],
  },
];
