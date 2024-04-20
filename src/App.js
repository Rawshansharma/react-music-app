import { useRef, useState } from "react";
import Libray from "./components/Libray";
import data from './data'
function App() {
  const [songs,setSongs] = useState(data());
  return (
    <div>
      <Libray
       librayStatus={librayStatus}
       setLibraryStatus={setLibraryStatus}
       setSongs={setSongs}
       isPlaying={isPlaying}
       audioRef={audioRef}
       songs={songs}
       setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
