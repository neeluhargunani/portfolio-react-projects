import React from 'react'
import {ListGroup, Card} from 'react-bootstrap';

const List = (props) => {
    const words = props.words;
     const items = words.map((word, idx) =>
    <ListGroup.Item as="li" active key={idx} variant="flush">
    
    <a className="list-group-item-action" href="#">{word}</a>
    </ListGroup.Item>   
    )
    return (
        <div id="jsxlists">
        
        <Card className="listbrdr" >
        <Card.Header className="bg-info text-white"><h5>Dynamic List component</h5></Card.Header>
  <Card.Body >
        <ListGroup as="ul" variant="flush">

  <ListGroup.Item as="li" active>
  <a className="list-group-item-action" href="#">{items}</a>
  </ListGroup.Item>
  
</ListGroup>
</Card.Body>
</Card>
</div>
    );
}

export default List;
