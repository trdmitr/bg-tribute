import React from 'react'
import { useState, useMemo } from "react";
import classes from './PlayList.module.css'
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
const Player = ({songs}) => {
    const audioList = useMemo (() => {
    const audiosongs1 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.audio= song.audio1;
        //  container.audio2= song.audio2 || 0;
        //  container.audio3= song.audio3 || 0;
        return container;
    }
    )
    const audiosongs2 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.audio = song.audio2;
        //  container.audio2= song.audio2 || 0;
        //  container.audio3= song.audio3 || 0;
        return container;
    }
    )
    const audiosongs3 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.audio = song.audio3;
        //  container.audio2= song.audio2 || 0;
        //  container.audio3= song.audio3 || 0;
        return container;
    }
    )
    
       
 return [...audiosongs1, ...audiosongs2, ...audiosongs3]
 .filter(e => e.audio !== '');
 
    }, [songs])
 
//  console.log(audioList)
    const [trackIndex, setTrackIndex] = useState(0);
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
          currentTrack === 0 ? audioList.length - 1 : currentTrack - 1
        );
      };
      const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
          currentTrack < audioList.length - 1 ? currentTrack + 1 : 0
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
        src={audioList[trackIndex].audio}
        // onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Сейчас играет: ${audioList[trackIndex].name}`}
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