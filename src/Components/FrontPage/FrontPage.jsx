import classes from './FrontPage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import Img from '../Img'

const FrontPage = () => {
    const navigate = useNavigate();
  const imgUrl = "https://sun9-86.userapi.com/impg/kHPddrPRQ_-sEHyq9aynQWRmU1EaQNx4HIDO2g/9Hj53TPJW34.jpg?size=1999x2160&quality=95&sign=e89b27e1119dec086e759f57a67cd375&type=album"
  const imgAlt = "Каверы Подземки"

return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <PlayButton  onClick={() => navigate("/playlist")}></PlayButton> */}
        <div className={classes.front_header}>
                    <h3></h3>
                </div>
                <div className={classes.front_media}>
                  <Img imgUrl = {imgUrl} imgAlt={imgAlt}/>
                    {/* <img src={imUrl} width={80} alt="Каверы Подземки" /> */}
                </div>
                <div className={classes.front_body}>
                    <span>С ДНЁМ РОЖДЕНИЯ ПРЕКРАСНЫХ ИСПОЛНИТЕЛЕЙ! 🤘🏻🤘🏻🤘🏻 </span>
                </div>
      </div>
    </div>
  )
}
  export default FrontPage