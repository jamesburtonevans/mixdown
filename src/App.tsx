import { useState } from 'react';
import { sampleReleases } from './sampleData';
import { ReleaseRow } from './components/ReleaseRow';
import type { Track } from './types';

export default function App() {
  const [releases, setReleases] = useState(sampleReleases);
  function updateTrack(releaseId: string, trackId: string, changes: Partial<Track>) {
    console.log(releaseId, trackId, changes)
  }
  return (
    <main>
      {releases.map((release) => (
        <ReleaseRow key={release.id} release={release} onUpdateTrack={(trackId, changes) => updateTrack(release.id, trackId, changes)} />
      ))}
    </main>
  )
}
