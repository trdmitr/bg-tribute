import React, { useMemo, useState } from 'react'
import classes from './CaverPage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import PlayButton from '../UI/Buttons/PlayButton'
import Modal from '../UI/Buttons/Modals/Modals'
import Loader from '../UI/Loader/Loader'
import About from '../About'
import Img from '../Img'

const CaverPage = ({songs, songError, isSongsLoading}) => {
    // console.log("songs ", songs)
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const singContent = useMemo(() => {
        return songs.map((caver) => (
            <div className={classes.col} key={caver.id.toString()} onClick={() => navigate(`/cavers/${caver.id}`)}>
              { isSongsLoading ? <Loader/> : <div className={classes.item}>
                    {/* <img src={caver.photo} alt={caver.name} /> */}
                    <Img imgUrl={caver.photo} imgAlt={caver.name} />
                </div>}
                <p>{caver.name}</p>
            </div>   
        ))
    }, [songs])
  return (
    <div className={cl.tribute_app}>
    <div className={classes.content}>
        <Modal visible={modal} setVisible={setModal}>
            <About />
        </Modal>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        <PlayButton onClick={() => setModal(true)}></PlayButton>
        {/* <PlayButton onClick={() => navigate("/playlist")}></PlayButton> */}
        <div className={classes.row} >
        {songError && 
        <h1> Ошибка ${songError}</h1>
        }        
            {singContent}
        </div>
    </div>
</div>
  )
}

export default CaverPage