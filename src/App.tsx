import { useState } from 'react'
import { sampleReleases } from './sampleData'

export default function App() {
const [release, setReleases] = useState(sampleReleases)
  return (
    <main>
      {release.map((release) => (
        <div key={release.id}>{release.id}</div>
      ))}
    </main>
  )
}
