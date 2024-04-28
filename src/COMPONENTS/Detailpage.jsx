import React, { useContext, useEffect } from 'react'
import { sampleContext } from '../App';
import {imageUrl} from './Url';
import { IoStarHalf } from "react-icons/io5";

const Detailpage = () => {
  const {context,newcontext, sethide, setbannerhide} = useContext(sampleContext);
  console.log(context);
  console.log(newcontext);
  
  const filtermovie = newcontext.filter(e => e.id === context);
  console.log(filtermovie);
  const newmovie = filtermovie[0];
 
    useEffect(() => {
    sethide(false);
    setbannerhide(false)
  }, [])
  
  
   return (
    
    <div className='det' style={{display:"flex",backgroundColor:"black", height:"606px"}}>
    <img style={{width:"50%", height:"390px", margin:"30px", borderRadius:"25px"}} 
    // src={imageUrl+ context.backdrop_path} 
    src={imageUrl+ newmovie.backdrop_path}  alt="" />

    <div style={{ marginTop:"75px",marginRight:"30px", color:"white"}}>
       <h2 style={{fontFamily:"cursive"}}>{context.title || context.name}{newmovie.title || newmovie.name}</h2>
       <h5 style={{fontFamily:"revert"}}>Overview :</h5>
       <h5 style={{width:"100%", margin:"auto", fontFamily:"initial"}}>{context.overview}{newmovie.overview}</h5>
       <h5 style={{marginTop:"10px"}}> id : {context.id} {newmovie.id}</h5>
       <h5> Rating : {context.popularity}{newmovie.popularity} <IoStarHalf /></h5>
       <h5> Release_Date : {context.release_date ||context.first_air_date}{newmovie.release_date || newmovie.first_air_date}</h5>
    </div>
  </div>
)
}

export default Detailpage