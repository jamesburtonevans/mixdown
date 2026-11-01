# Mixdown: Release Tracker

A release tracker for independent musicians. See every track on a single, EP, or album move through production, from mix to distribution, at a glance.

Live demo: *coming soon*
[Design file](https://www.figma.com/design/krb3JIEyzjm6DTVXyNEy5r/Mixdown--Release-Tracker?node-id=1-2&t=EjPOOWgkb8ojkbU4-1)

---

## Why I built this

I produce music, and releasing it means juggling a lot of half-finished steps across many tracks: which songs are mixed, which are mastered, whether the artwork is done, and what's still blocking the release date. Generic to-do apps flatten all of that into one list. Mixdown: Release Tracker organizes work the way a release actually happens: **release -> tracks -> stages**.

## Core idea: the stage view

Each release shows its tracks as rows and its production stages as columns, so you can see at a glance what's done and what's holding things up.

| Track       | Mix | Master | Artwork | Distribution |
|-------------|-----|--------|---------|--------------|
| Track One   | ✅  | ✅     | ⏳      | ⬜           |
| Track Two   | ✅  | ⏳     | ⬜      | ⬜           |
| Track Three | ⏳  | ⬜     | ⬜      | ⬜           |

## Features

### MVP
- [ ] Create a release (single / EP / album) with a title and target release date
- [ ] Add, rename, reorder, and delete tracks within a release
- [ ] Per-track stage view showing each stage as not started / in progress / done
- [ ] Release progress summary (e.g. "7 of 12 stages complete")
- [ ] Data persists in localStorage
- [ ] Deployed

### Later
- [ ] Overdue warnings based on target release date
- [ ] Notes and links per stage (mix file, reference track, distributor page)
- [ ] Filter tracks by stage ("show everything waiting on master")
- [ ] Custom stages per release
- [ ] Export/import releases as JSON

## Data model

```ts
type StageStatus = "not-started" | "in-progress" | "done";

type Stage = {
  id: string;
  name: string; // "Mix", "Master", "Artwork", "Distribution"
  status: StageStatus;
  note?: string;
};

type Track = {
  id: string;
  title: string;
  stages: Stage[];
};

type Release = {
  id: string;
  title: string;
  type: "single" | "ep" | "album";
  targetDate?: string; // ISO date
  tracks: Track[];
};
```

## Design & accessibility

- Designed in Figma before building. See the design file link above.
- Status is never conveyed by color alone; each status also has an icon and a text label.
- Fully keyboard operable, with visible focus states.
- Semantic HTML and proper labels on all controls.
- Responsive, with a stage view that adapts to mobile.

## Tech stack

- React + Vite
- TypeScript
- CSS
- localStorage for persistence
- Deployed on Netlify

## Getting started

```bash
git clone https://github.com/jamesburtonevans/mixdown.git
cd release-board
npm install
npm run dev
```

## About

Built by [James Burton Evans](https://jamesburtonevans.com), product designer and frontend developer.
