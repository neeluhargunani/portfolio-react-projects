import React, { useState } from 'react';
import { Form,Button, Card} from 'react-bootstrap';


const Registration = () => {
    const [name, setName] = useState();
  
    const [password, setPassword] = useState();
    const inputEvent= (event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    };
    const inputEventTwo= (event)=>{
        console.log(event.target.value);
        setPassword(event.target.value);
    };
    const onSubmits =(event)=>{
event.preventDefault();
       alert("form submited")


    }
    return (
        <div id ="registerationform">
         <Card className="mt-3 listbrdr">
     
  <Card.Body className="p-4">
<Form onSubmit={onSubmits}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" value ={name} onChange={inputEvent}/>

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value ={password} onChange={inputEventTwo}/>
  </Form.Group>

  <Button variant="info" type="submit" className="btn btn-md btn-info text-center mt-2">
    Submit
  </Button>
</Form>
</Card.Body></Card>
        </div>
    );
}

export default Registration
