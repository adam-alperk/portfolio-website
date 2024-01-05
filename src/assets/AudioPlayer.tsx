// import React from "react";
import ReactPlayer from "react-player";
import "./AudioPlayer.css";

const AudioPlayer = ({ audioSrc, artworkSrc, songName }) => {
  return (
    <div className="audio-player">
      <img src={artworkSrc} alt="Artwork" className="artwork" />
      <h2 className="songName">{songName}</h2>
      <div className="player-wrapper">
        <ReactPlayer
          url={audioSrc}
          controls
          width="100%"
          height="100%"
          config={{
            soundcloud: {
              options: {
                show_artwork: false,
                auto_play: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
