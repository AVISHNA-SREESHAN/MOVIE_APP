import React, { useEffect, useState } from 'react'
import { latestMovies } from './Url'
import axios from 'axios'
import { imageUrl } from './Url' 
import { Card } from 'react-bootstrap'

const Latest = () => {
  const [latest, setlatest] = useState([])
  useEffect(() => {
   axios.get(latestMovies).then((arg)=>setlatest(arg.data.results));
    
  }, [])
  
  return (
    <div className='row  justify-content-center'>
         {latest.map((arg)=>{
        return(
<Card style={{ width: '17rem', margin:"16px", marginTop:"40px", height:"350px", padding:"0px"}}>
      <Card.Img variant="top" src={imageUrl+ arg.backdrop_path}/>
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

export default Latest