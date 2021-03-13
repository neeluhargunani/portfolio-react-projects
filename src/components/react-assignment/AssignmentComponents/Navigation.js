import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';
import '../AssignmentComponents/css/Navigation.css';
import Heading from './Header';
import {Link} from 'react-scroll';

const Navigation = () => {
    return (
        <>
             <Navbar collapseOnSelect expand="lg" variant="dark">
   <div className ="container">
  <Navbar.Brand href="#home"><b>Assignments</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link  href="#banner" data-target="#banner"><Link activeClass="active" to="banner" spy={true} smooth={true} duration={1000}><i class="fa fa-home fa-fw" aria-hidden="true"></i></Link></Nav.Link>
      
    <Nav.Link><Link activeClass="active" to="greetform" spy={true} smooth={true} duration={1000}>Greet-form</Link></Nav.Link>
      <Nav.Link  href="#greetform" data-target="#greetform"><Link activeClass="active" to="greetform" spy={true} smooth={true} duration={1000}>Greet-form</Link></Nav.Link>
      
      <Nav.Link  href="#jsxlists" data-target="#jsxlists"><Link activeClass="active" to="jsxlists" spy={true} smooth={true} duration={1000}>Dynamic-list</Link></Nav.Link>
      
      <Nav.Link  href="#table" data-target="#table"><Link activeClass="active" to="table" spy={true} smooth={true} duration={1000}>Table</Link></Nav.Link>
      <Nav.Link  href="#registerationform" data-target="registerationform"><Link activeClass="active" to="registerationform" spy={true} smooth={true} duration={1000}>Registration-form</Link></Nav.Link>

    </Nav>
   
    
  </Navbar.Collapse>
  </div>
</Navbar>
 <div id ="banner" style={{ 
      backgroundImage: `url("/images/ban1.png")` 
    }} className="banner">
     <div className=" banner-text text-center"><Heading/></div>
    </div>
        </>
    );
}

export default Navigation;
