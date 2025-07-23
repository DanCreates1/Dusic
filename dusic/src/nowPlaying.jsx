import React, { useState, useEffect} from 'react';

export default function NowPlaying() {
    const [song, setSong] = useState(null);

    useEffect(() => {
        fetch('/api/token')
        .then(res => res.json())
        .then(data => setSong(data));
    }, []);


    if (!song || !song.isPlaying) return  <p>No song is playing</p>
  return (
    <div className="now-playing">
      <img src={song.albumImageUrl} alt={song.songName} width={64}/>
      <h2>{song.songName}</h2>
      <h4>{song.songArtist}</h4>
       <a href={song.songUrl} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
    </div>
  );
}