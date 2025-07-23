import React, { useState, useEffect } from 'react';

export default function SavedTracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/saved')
      .then(res => res.json())
      .then(data => {
        setTracks(data.tracks || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading saved tracks...</p>;
  if (tracks.length === 0) return <p>No saved tracks found.</p>;

  return (
    <div>
      <h2>Your Liked Songs</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tracks.map(track => (
          <li key={track.id} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <img src={track.albumImageUrl} alt={track.name} width={64} height={64} style={{ marginRight: '1rem' }} />
            <div>
              <a href={track.songUrl} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>
                {track.name}
              </a>
              <p>{track.artists}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
