import React , {Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Form, Button, Table } from 'react-bootstrap';


class CrudApplication extends Component{
    constructor() {
        super();
        
       this.state= {
         title:"My Crud Application",
         subtitle:" To do task on selected date and month",
         footer:"you can edit task by click on content and delete by clicking button",
         employeeData:[],
         act:0,
         index:''
       }
       }
       handleSubmit = (e) =>{
         e.preventDefault();
          let employeeData= this.state.employeeData; 
          let task = this.refs.txtTask.value;
          let date = this.refs.txtDate.value;
          
          if(this.state.act === 0)
          {
           let newEmployee = {
             "task":task,
             "date":date,
                }
                employeeData.push(newEmployee);
          }
          else
          {
            let index = this.state.index;
            employeeData[index].task = task;
            employeeData[index].date = date;
          }
         
        
        this.setState({
         employeeData:employeeData,
         act :0
        })
        this.refs.myForm.reset();
       }
     render(){
        let employeeData = this.state.employeeData;
    return (
        <div className="container">

        <div className="row ">
       <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12  m-auto">
             <Card className="mt-5">
      <Card.Header > <Card.Title> <h2><i>{this.state.title}</i></h2></Card.Title>
    <Card.Subtitle className="mb-2 text-muted mt-2 "><em><h6>{this.state.subtitle}</h6></em></Card.Subtitle></Card.Header>
  <Card.Body>
   
    <Card.Text>
    <Form ref="myForm">
    <Form.Label htmlFor="task"><em>Task What to Do</em></Form.Label>
         <Form.Control type="text" ref="txtTask" placeholder="Enter task you want to do"/>
         <Form.Label htmlFor= "date" className="mt-2"><em>Date</em></Form.Label>
         <Form.Control  type="date"  ref="txtDate" min="2021-03-11" max="2022-12-31" />
         <Button variant="primary" className="mt-3" type="submit" onClick = {e => this.handleSubmit(e)}>Save</Button>
       </Form> 
    </Card.Text>
    <Table striped bordered hover >
  <thead className="bg-primary">
    <tr>
     
      <th><em>Task What to Do</em></th>
      <th ><em>Date</em></th>
      <th ><em>Edit/Delete</em></th>
    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td><em>React-js project</em></td>
      <td><em>11-03-2021</em></td>
      <td> <Button variant="danger" className="btn btn-sm" ><em>Delete</em></Button></td></tr>
    {
        
        employeeData.map( (data, i) => 
        <tr key ={i}>
        <td contentEditable={true}><em>{data.task}</em></td>
        <td contentEditable={true}><em>{data.date}</em></td>
      
        <td><Button variant="danger" className="btn btn-sm"  onClick= {i => this.handleDelete(i)}><em>Delete</em></Button></td>
      </tr>

       ) }
   
  </tbody>
</Table>
  </Card.Body>
  <Card.Footer className="bg-primary"><em><h6>{this.state.footer}</h6></em>
  </Card.Footer>
  <em><p className="text-muted">Email:- neelamh1000@gmail.com   phone:-9503836763 </p></em>
</Card>
<Link to="/Portfolio">Back To Portfolio </Link>
</div>
</div>
            
        </div>
    );
     }
}

export default CrudApplication
