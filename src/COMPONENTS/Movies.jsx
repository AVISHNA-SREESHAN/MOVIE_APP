import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { imageUrl } from './Url'
import { Link } from 'react-router-dom'
import { sampleContext } from '../App'



const Movies = ({movie}) => {

const [movies, setmovies] = useState([])
// const [filteredproduct, setfilteredproduct] = useState([])
const {setcontext,newcontext, setnewcontext,sethide,srch, setsearchhide,setbannerhide}=useContext(sampleContext)

  useEffect(() => {
    axios.get(movie).then((arg)=>setmovies(arg.data.results))

    sethide(true);
    setsearchhide(false);
    setbannerhide(false)

  }, )

console.log(movies);

const click=(arg)=>{
    console.log(arg);
    setcontext(arg)
    setnewcontext(movies)
  }
console.log(newcontext);

const filtersearch = movies.filter((e) => (e.title || e.name).toLowerCase().includes(srch));
console.log(filtersearch);

return (
<div className='row  justify-content-center '>
{ ( srch.length > 0 ? filtersearch: movies).map((arg)=>{

return( 
  <div className="col-md-3" style={{height:"528px", marginTop:"30px"}}>
  <Link  to={"/Detailpage"}>
  <Card onClick={()=>click(arg.id)} style={{ width: '18rem',  border:"none"}}>
  <Card.Img variant="top" src={imageUrl+ arg.poster_path} />
 
</Card>
</Link>
</div>
    )
 })}
</div>
  )}
export default Movies
