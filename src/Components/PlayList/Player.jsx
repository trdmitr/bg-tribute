import React from 'react'
import { useState, useMemo } from "react";
import classes from './PlayList.module.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useEffect } from 'react';
const Player = ({songs}) => {
  // var tags = ['audio', 'animal']
  // songs.filter(song => {
  //   const itemTags = song.tags.split(', '); 
  //   return tags.every(t => itemTags.includes('audio')); 
  // }); 
  // const oneSing = songs.every(elem => elem.length >>> 0);

    const audioList = useMemo (() => {
    const audiosongs1 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src= song.audio1;
        //  container.audio2= song.audio2 || 0;
        //  container.audio3= song.audio3 || 0;
        return container;
    }
    )
    const audiosongs2 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src = song.audio2;
        //  container.audio2= song.audio2 || 0;
        //  container.audio3= song.audio3 || 0;
        return container;
    }
    )
    const audiosongs3 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src = song.audio3;
        //  container.audio2= song.audio2 || 0;
        //  container.audio3= song.audio3 || 0;
        return container;
    }
    )
    
       
 return [...audiosongs1, ...audiosongs2, ...audiosongs3]
 .filter(e => e.src !== '');
 
    }, [])
 
//  console.log("audioList", audioList)
//  const oneSing =  useEffect(() => {

// }, [])

const audCommon =  useMemo(() => {
const mapUsersByFields = (fields) => songs.map(u1 => fields.reduce((u2, f1) => {
  u2[f1] = u1[f1];
  return u2;
}, {}));
// console.log(mapUsersByFields(["name", "audio1", "audio2", "audio3"]));
const aud1 = mapUsersByFields(["name", "audio1"]);
const aud2 = mapUsersByFields(["name", "audio2"]);
const aud3 = mapUsersByFields(["name", "audio3"]);

 


 
return [...aud1, ...aud2, ...aud3].filter(e => e.src !== '');
}, [])
// console.log('audCommon ', audCommon );



  const musicTracks = [
    {
        "name": "Виталий Подземный",
        "src": "https://drive.google.com/uc?export=download&id=1g9CMdR2ZVnYsyHYpN8jkt2Ax0hYDVsn0"
    },
    {
        "name": "Серж Левинс",
        "src": "https://drive.google.com/uc?export=download&id=12d_H0sN7jps6JzP4XPyxRVAn7_LxflIE"
    },
    {
        "name": "Дворовый стиль",
        "src": "https://drive.google.com/uc?export=download&id=13g_-YPDnrgdnIJCPqwK0wB1g17Nx01hU"
    },
    {
        "name": "Николай Зайцев",
        "src": "https://drive.google.com/uc?export=download&id=1b9gYg5fTJ4_tRIEmrT0tJkUICkL4GydF"
    },
    {
        "name": "Василий Рыжкин",
        "src": " https://drive.google.com/uc?export=download&id=1ch5Z5wnqIYfBNh6RKEIXvurd2-t4V2ZF"
    },
    {
        "name": "Юрий Молчанов",
        "src": "https://drive.google.com/uc?export=download&id=1OUnunZbwiW2mBB5CCyAfAXEee-lblxs7"
    },
    {
        "name": "Shp1onkA",
        "src": "https://drive.google.com/uc?export=download&id=1DCuuJY3wbumMIuYlM6XmrgBuH5pUxjx3"
    },
    {
        "name": "DackFax",
        "src": "https://drive.google.com/uc?export=download&id=1THuiuYTynB2s9QeLEe1QJozr8aeWBv53"
    },
    {
        "name": "ENA_WD",
        "src": "https://drive.google.com/uc?export=download&id=1MtEathN2ONYK8PbEpsQabr0hTXMfrfXR"
    },
    {
        "name": "Жанат Акбулатов",
        "src": "https://drive.google.com/uc?export=download&id=11FVHULIRG4GNrTfmT_GU_Rf8hBaJHFTv"
    },
    {
        "name": "Влад Ионов",
        "src": "https://drive.google.com/uc?export=download&id=1hT8dcU8R4cAa0yKUhLZ0VTu4oTUNuq8a"
    },
    {
        "name": "Константин Рубан",
        "src": " https://drive.google.com/uc?export=download&id=1jH4ryyWnbGkXq5LYFVVefKSxLMaOJsW2"
    },
    {
        "name": "Алексей Недостоев",
        "src": "https://drive.google.com/uc?export=download&id=1lMizAPyFwKxz77hs3N8ZesEQp6INz_nn"
    },
    {
        "name": "Виталий Подземный",
        "src": "https://drive.google.com/uc?export=download&id=1s2HYUfbgANCE9dIkY-f_LkqqQN1CdYrM"
    },
    {
        "name": "Юрий Молчанов",
        "src": "https://drive.google.com/uc?export=download&id=1XEps5GAWfY4gggtzyoiOkpS7hErwhyaD"
    },
    {
        "name": "DackFax",
        "src": " https://drive.google.com/uc?export=download&id=1988bCJuMNM7eRTehT39kILF2KtfcPz61"
    },
    {
        "name": "Константин Рубан",
        "src": "https://drive.google.com/uc?export=download&id=1texscNBD7A4nDDH7BuKrzD84-reUhLv6"
    },
    {
        "name": "Виталий Подземный",
        "src": "https://drive.google.com/uc?export=download&id=1QCbIYuRpmhYyiucHNvfO-lk7dx_NL1jz"
    },
    {
        "name": "Юрий Молчанов",
        "src": "https://drive.google.com/uc?export=download&id=13fguTy53DlxDOY5BG1-LNVDWDohKUEcc"
    },
    {
        "name": "DackFax",
        "src": "https://drive.google.com/uc?export=download&id=174_nK8T_dpQiDdMElByOOrWuQT5_cR0O"
    }
]
// console.log("musicTracks ", musicTracks)


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