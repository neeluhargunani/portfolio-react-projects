import React from 'react'
import {Table} from 'react-bootstrap';

const Employeecomponent = () => {
    const employee=[
        {id: 110, name: "Kavita", salary: 40000},
        {id: 111, name: "Rimali", salary: 50000},
        {id: 112, name: "Sanjay", salary: 60000},
    ]

    const renderEmployee = (employee, index)=>{
        return(
         <tr key ={index}>
         <td>{employee.id}</td>
         <td>{employee.name}</td>
         <td>{employee.salary}</td>
         </tr>
        
        );
        
        }
    return (
        <div id="table">
   
    <h5 className="page-header text-center mt-3 py-2 mb-3 text-white">Genertate dynamic componemt table</h5>

     
<Table striped bordered hover variant="dark" className=" text-center">
  <thead>
    <tr>
      <th scope="col">EmpId</th>
      <th scope="col">EmpName</th>
      <th scope="col">EmpSalary</th>
    
    </tr>
  </thead>
  <tbody>
    {employee.map(renderEmployee)}
  
  </tbody>
</Table>
</div>
    )
}

export default Employeecomponent
