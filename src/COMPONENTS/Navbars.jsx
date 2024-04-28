import React, { useContext } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiSolidCameraMovie } from "react-icons/bi";
import { sampleContext } from '../App';


const Navbars = () => {
const {srch, setsrch,searchhide}=useContext(sampleContext)
const getsearch=(e)=>{
  setsrch(e.target.value)
}
console.log(srch);

const submitSearch=(e)=>{
e.preventDefault();
}

return (
      
  <div>
    <Navbar style={{backgroundImage: 'linear-gradient(to right,#5b0202, #1f1f1f)'}} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='movie1' style={{fontWeight:"bold", fontSize:"25px", color:"orange"}}>Movies App <BiSolidCameraMovie /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="#home"> <Link className='movie'style={{textDecoration:"none",color:"orange"}} to ={"/popular"}>Popular Movies</Link></Nav.Link>
        <Nav.Link href="#link"><Link className='movie' style={{textDecoration:"none",color:"orange"}} to ={"/latest"}>Latest Movies</Link></Nav.Link>
        <Nav.Link href="#link"><Link className='movie' style={{textDecoration:"none",color:"orange"}}to ={"/comedy"}>Comedy Movies</Link></Nav.Link>
      {searchhide===true?null:(
  <div>
      <Form
          onSubmit={submitSearch}
          className="d-flex ms-auto">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-1"
            aria-label="Search"
            onChange={getsearch}
            name="title"
            style={{borderRadius:"25px"}}
        />
      </Form>
    </div>
       )}
      </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>
</div>
  )
}

export default Navbars