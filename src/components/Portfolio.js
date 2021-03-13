import React from 'react'
import { ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Portfolio = () => {
    return (
     
        <div className="container">
        <div className="row mt-5"><div className="col-md-12 col-sm-12 col-lg-6 col-xl-6 m-auto">
        <h2><em>Welcome to my react projects</em></h2>
            <ListGroup>
  <ListGroup.Item><Link to = "/ReactAssignment">React-assignment</Link> </ListGroup.Item>
  <ListGroup.Item><Link to ="/CrudApplication">Crud Application</Link></ListGroup.Item>


</ListGroup>
        </div></div>
            
 </div>
    );
}

export default Portfolio;
