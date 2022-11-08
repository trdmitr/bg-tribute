import React from 'react'
import { useState } from "react";
import classes from './PlayList.module.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Player = () => {
    const musicTracks = [
        {
          name: "Memories",
          src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
        },
        {
          name: "Creative Minds",
          src: "https://drive.google.com/uc?export=download&id=17A1Pdk7cHrYlT79ISQYdFUxkjqHfq1Su"
        },
        {
          name: "Acoustic Breeze",
          src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
          src: "https://drive.google.com/uc?export=download&id=1NuhFEzz944Pkn-5JIi8BlU8ldIbO4aCK"
        }
    ]
    const [trackIndex, setTrackIndex] = useState(0);
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
          currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
      };
      const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
          currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
      };
  return (
   
    <div className= {classes.player}>
      <h1>Нонстоп Трибьюта!</h1>
      <AudioPlayer className={classes.rap_container}
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" }}
        // autoPlay
        // layout="horizontal"
        src={musicTracks[trackIndex].src}
        // onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Сейчас играет: ${musicTracks[trackIndex].name}`}
        // footer="All music from: www.bensound.com"
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        // other props here
      />
    </div>
  )
}

export default Player