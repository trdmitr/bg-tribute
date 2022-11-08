import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router";
import classes from './SingleOne.module.css'
import {  useNavigate } from 'react-router-dom'
import ReactPlayer from "react-player";
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import BackButton from '../UI/Buttons/MyButton';
import PlayButton from '../UI/Buttons/PlayButton';
import YoutButton from '../UI/Buttons/YoutButton';

const SingleOne = ({ songs } ) => {
  const navigate = useNavigate();
  const params = useParams(); 

  const currSings = useMemo(() => {
    return songs.filter(songs => songs.id == params.id);
  
}, [songs])

const listContent = useMemo(() => {         
  return  currSings.map((currSing) =>   
 <div className={classes.mediaSong} key={currSing.id}> 
    <img className={classes.mediaImage} src={currSing.photo} width={80} alt={currSing.name} />
    <div className= {classes.headerSong}>
<h2>{currSing.name}</h2></div>
<a className={classes.linkTo}  href={currSing.link} target="_blank"> Канал исполнителя </a>
{/* <Link reloadDocument className={classes.linkTo} to={currSing.link}>Канал исполнителя </Link> */}
<div className = {[
classes.audioBlock,
currSing.audio1 ? '' : classes.mediaHidden].join(' ')
}>
<p>{currSing.audio_name1}</p>
<audio controls className={currSing.audio1 ? '': classes.mediaHidden}
  source src={currSing.audio1} type="audio/mpeg" /> 
 <p>{currSing.audio_name2}</p>
<audio controls className={currSing.audio2 ? '': classes.mediaHidden}
  source src={currSing.audio2} type="audio/mpeg" /> 
  <p>{currSing.audio_name3}</p>
<audio controls className={currSing.audio3 ? '': classes.mediaHidden}
  source src={currSing.audio3} type="audio/mpeg" />  
</div>
<div>
<img className={classes.tziImage} src={currSing.picture_tzitata} width={80} alt="Цитаты Пикник"/>
</div>
<div className = {[
classes.videoBlock,
currSing.video1 ? '' : classes.mediaHidden].join(' ')
}>
<p>{currSing.video_name1}</p>
<ReactPlayer className={currSing.video1 ? '': classes.mediaHidden}
id= {classes.videoFrame} url = {currSing.video1} controls={true} />
<p>{currSing.video_name2}</p>
<ReactPlayer className={currSing.video2 ? '': classes.mediaHidden} id={classes.videoFrame} url = {currSing.video2}  controls={true} />
<p>{currSing.video_name3}</p>
<ReactPlayer className={currSing.video3 ? '': classes.mediaHidden} id={classes.videoFrame} url = {currSing.video3} controls={true} />
</div> 

</div>);
}, [currSings])

  return (
    <div className={cl.tribute_app}>
            <div className={classes.content}>
                <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
                <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
                {/* <YoutButton onClick={() => navigate("/playlist")}>плелист</YoutButton> */}
                <BackButton onClick={() => navigate("/cavers")}>Назад</BackButton>
                {listContent}
            </div>
        </div>
  )
}

export default SingleOne