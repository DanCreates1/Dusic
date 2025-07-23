export default async function handler(req, res) {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  // 1. Get new access token using refresh token
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  const tokenData = await tokenResponse.json();
  const access_token = tokenData.access_token;

  // 2. Fetch user's saved tracks (liked songs)
  const savedResponse = await fetch('https://api.spotify.com/v1/me/tracks?limit=10', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!savedResponse.ok) {
    return res.status(savedResponse.status).json({ error: 'Failed to fetch saved tracks' });
  }

  const savedData = await savedResponse.json();

  // 3. Simplify data to send to frontend
  const tracks = savedData.items.map(item => ({
    id: item.track.id,
    name: item.track.name,
    artists: item.track.artists.map(artist => artist.name).join(', '),
    albumImageUrl: item.track.album.images[0].url,
    songUrl: item.track.external_urls.spotify,
  }));

  res.status(200).json({ tracks });
}
