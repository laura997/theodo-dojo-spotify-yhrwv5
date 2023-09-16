import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks';

const App = () => {
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  console.log(tracks);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      <div className="App-images">
        <p>Il va falloir modifier le code pour faire un vrai blind test !</p>
      </div>
      <div className="App-buttons">
        <button onClick={goToNextTrack}>Next track</button>
      </div>
    </div>
  );
};

export default App;
