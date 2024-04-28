import './App.css';
import Navbars from './COMPONENTS/Navbars';
import './COMPONENTS/Navbars.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { comedyMovies, latestMovies, popularMovies } from './COMPONENTS/Url';
import Movies from './COMPONENTS/Movies';
import Detailpage from './COMPONENTS/Detailpage';
import { createContext, useState } from 'react';
import "./COMPONENTS/Detail.css"
import "./COMPONENTS/Movies.css"
import Banner from './COMPONENTS/Banner';

const sampleContext = createContext();
function App() {

  const [context, setcontext] = useState([])
  const [newcontext, setnewcontext] = useState([])
  const [hide, sethide] = useState(true)
  const [srch, setsrch] = useState([])
  const [searchhide, setsearchhide] = useState(true)
  const [bannerhide, setbannerhide] = useState(true)

return (
    <div>

    <sampleContext.Provider value={{context, setcontext,newcontext, setnewcontext,hide, sethide,srch, setsrch,searchhide, setsearchhide,bannerhide, setbannerhide}}>
    <BrowserRouter>
    {hide===true? <Navbars/>:""}
    {bannerhide===true? <Banner/>:""}
      <Routes>
        <Route  path="/popular" element={<Movies  movie={popularMovies}/>}/>
        <Route  path="/latest" element={<Movies movie={latestMovies}/>} />
        <Route  path="/comedy" element={<Movies movie={comedyMovies}/>}/>
        <Route  path="/detailpage" element={<Detailpage/>}/>
      </Routes>
    </BrowserRouter>
    </sampleContext.Provider>

     </div>
  );
}
export default App;
export {sampleContext}
