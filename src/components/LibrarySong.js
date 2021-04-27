import React from "react";
import Info from "./Info";


const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs, info }) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedSong[0]);
        //Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
        audioRef.current.play();
        // Check if song is playing
        if (isPlaying) audioRef.current.play();

    };


    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
                <Info
                    song={song}
                    info={info}
                />
            </div>
        </div>
    )
}

export default LibrarySong;