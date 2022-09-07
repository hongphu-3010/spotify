import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import "./Playing.css";
function Playing() {
  const { DataSongs, song, handleSetSong } = useContext(Songs);
  const handleClickNext = () => {
    if (DataSongs.length - 1 === song.id) {
      handleSetSong(DataSongs[0].id);
    } else handleSetSong(song.id + 1);
  };
  const handleClickPrevious = () => {
    if (song.id === 0) {
      handleSetSong(DataSongs[DataSongs.length - 1].id);
    } else handleSetSong(song.id - 1);
  };
  const handleEnd = () => {
    handleClickNext();
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleEnd}
      />
    </div>
  );
}

export default Playing;
