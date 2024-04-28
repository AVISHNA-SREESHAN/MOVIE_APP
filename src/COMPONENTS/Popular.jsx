import React, { useEffect, useState } from 'react'
import { popularMovies } from './Url'
import axios, {} from 'axios'
import { imageUrl } from './Url'
import {Card } from 'react-bootstrap'
const Popular = () => {
const [popular, setpopular] = useState([])
useEffect(() => {
  axios.get(popularMovies).then((arg)=>setpopular(arg.data.results));

  
}, [])

  return (
    <div className='row  justify-content-center'>
      {/* <h1 style={{textAlign:"center", color:"magenta"}}>Popular Movies</h1> */}
        {popular.map((arg)=>{
        return( 
<Card style={{ width: '17rem', margin:"16px", marginTop:"40px", height:"350px",padding:"0px"}}>
      <Card.Img variant="top" src={imageUrl+ arg.backdrop_path} style={{padding:"0px"}}/>
      <Card.Body>
        <div style={{textAlign:"center"}}>
        <Card.Title>{arg.title}</Card.Title>
        <Card.Text>
         {arg.popularity}
        </Card.Text>
        <Card.Text>
         {arg.release_date}
        </Card.Text>
        </div>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        )
        
        })}
    </div>
  )
}

export default Popular