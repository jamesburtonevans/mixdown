import { useState } from 'react';
import { sampleReleases } from './sampleData';
import { ReleaseRow } from './components/ReleaseRow';
import type { Track } from './types';

export function App() {
  const [releases, setReleases] = useState(sampleReleases);

  function updateTrack(releaseId: string, trackId: string, changes: Partial<Track>) {
    setReleases((currentReleases) => {
      return currentReleases.map((release) => {
        if (release.id === releaseId) {
          return {
            ...release,
            tracks: release.tracks.map((track) => {
              if (track.id === trackId) {
                return { ...track, ...changes };
              } else {
                return track;
              }
            }),
          };
        } else {
          return release;
        }
      });
    });
  }

  return (
    <main>
      {releases.map((release) => (
        <ReleaseRow key={release.id} release={release} onUpdateTrack={(trackId, changes) => updateTrack(release.id, trackId, changes)} />
      ))}
    </main>
  )
}
