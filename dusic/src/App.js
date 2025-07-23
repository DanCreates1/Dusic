import './App.css';
import NowPlaying from './nowPlaying.js';  
import SavedTracks from './SavedTracks';

function App() {
  return (
    <div className="App">
     <h1>Welcome to Dusic!</h1>
    <NowPlaying/>
    <SavedTracks />
     <p>Made by Daniel</p>
    </div>
  );
}

export default App;
