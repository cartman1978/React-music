import React, { useState, useRef } from "react";
// Import Styles
import "./styles/app.scss";
// Adding Components
import Song from "./components/Song";
import Player from "./components/Player"
import Library from "./components/Library"
import Nav from "./components/Nav"

// Import util
import data from "./util"

function App() {
  // Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeupdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  }

  return (
    <div className="App">
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />

      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeupdateHandler}
        onLoadedMetadata={timeupdateHandler}
        ref={audioRef}
        src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
