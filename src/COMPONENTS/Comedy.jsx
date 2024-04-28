import React, { useEffect } from 'react'
import { useState } from 'react'
import { comedyMovies, imageUrl } from './Url'
import axios from 'axios'
import { Card } from 'react-bootstrap'
const Comedy = () => {
  const [comedy, setcomedy] = useState([])
  useEffect(() => {
   axios.get(comedyMovies).then((arg)=>setcomedy(arg.data.results))
  }, [])
  
  return (
    <div className='row  justify-content-center' >
         {comedy.map((arg)=>{
        return(
          
<Card style={{ width: '17rem', margin:"16px", marginTop:"40px", height:"350px",padding:"0px"}}>
      <Card.Img variant="top" src={imageUrl+ arg.backdrop_path} />
      <Card.Body>
        <div style={{textAlign:"center"}}>
        <Card.Title>{arg.name}</Card.Title>
        <Card.Text>
         {arg.popularity}
        </Card.Text>
        <Card.Text>
         {arg.first_air_date}
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

export default Comedy