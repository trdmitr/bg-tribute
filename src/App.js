import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import FrontPage from './Components/FrontPage/FrontPage';
import { Fragment, useEffect, useState } from 'react';
import CaverPage from './Components/CaverPage/CaverPage';
// import CaverServise from './Components/API/CaverService';
import AxiosService from './Components/API/AxiosService'
import {useFetching} from './Components/Hooks/useFetchig'
import SingleOne from './Components/SingleOne/SingleOne';
// import PlayList from './Components/PlayList/PlayList';
function NotFound() {
  return <h2>Ресурс не найден</h2>;
}

function App() {
  const [songs, setSongs] = useState([]);
  const [fetchSongs, isSongsLoading, songError ] = useFetching (async () => {
    const response = await AxiosService.getCavers();
    setSongs(response.record.cavers)
  });

useEffect(() => {
  fetchSongs()
    // console.log("songs ", songs)
}, [])

       return (
       <Fragment>
        <HashRouter>
           <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/cavers" element={<CaverPage songs = {songs} songError = {songError} isSongsLoading = {isSongsLoading}/>} />
          {/* <Route path="/cavers" element={<Cavers isSongsLoading = {isSongsLoading} songs = {songs}/>} /> */}
          
          <Route path='/cavers/:id' element={<SingleOne songs = {songs} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </HashRouter>
      
    </Fragment>
     
   
  );
}

export default App;
