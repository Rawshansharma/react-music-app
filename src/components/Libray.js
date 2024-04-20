import React from 'react'

const Libray = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    setLibraryStatus,
    librayStatus,
}) => {
  return (
    <div className={`library ${librayStatus ? "active" : ""}`}>
      <h2 style={{color:'white'}}>
        All songs
      </h2>
      <div className='libray-songs'>
        {songs.map((song) =>(
            <LibraySong
             setSongs={setSongs}
             isPlaying={isPlaying}
             audioRef={audioRef}
             songs={songs}
             song={song}
             setCurrentSong={setCurrentSong}
             id={song.id}
             key={song.id}
            />
        ) )}
      </div>
    </div>
  )
}

export default Libray