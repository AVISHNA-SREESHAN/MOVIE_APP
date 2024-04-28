import React, { useEffect, useState } from 'react'
import { imageUrl, popularMovies } from './Url'
import axios from 'axios'

  const Banner = () => {
  const [banner, setbanner] = useState([])
    
    useEffect(() => {
     axios.get(popularMovies).then((e)=>setbanner(e.data.results))
    }, [])
  
    console.log(banner[0]);
    
  const pickmovie=()=>{
  const randommovie = Math.floor(Math.random() * banner.length);
    return banner[randommovie];
}

    const random=pickmovie()
   
  return (
    <div style={{
      // backgroundImage:`url(${imageUrl+ banner[0]?.backdrop_path})`,
      backgroundImage: `url(${imageUrl + random?.backdrop_path})`,
       height:"545px", backgroundSize:"100% 100%"}}>
      {/* <img src={imageUrl+ banner[0]?.backdrop_path}/> */}
      <div style={{textAlign:"center", margin:"auto", padding:"220px", color:"white", fontFamily:"cursive"}}>
      <h2> 
        {/* {banner[0]?.title} */}
       {random?.title}</h2>
      <h6> 
        {/* {banner[0]?.overview}  */}
       {random?.overview}</h6>
      </div>
  
    </div>
  )
}

export default Banner