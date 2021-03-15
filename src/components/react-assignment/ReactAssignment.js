import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '././AssignmentComponents/Navigation'
import Employeecomponent from './AssignmentComponents/Employeecomponent'
import Greet from './AssignmentComponents/Greet'
import List from './AssignmentComponents/List'
import Registration from './AssignmentComponents/Registration'

const ReactAssignment = () => {
    const words = ['Homedecor', 'kitchen & Dinning', 'Giftingkits' ];

    return (
        <>
            <Navigation/>
            <div className="container">

  <div className="row">
 <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center mt-4"><h4 className="mt-3">Day one and Day two assignment</h4></div>
  <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 "><Greet/></div>
 
  <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 "> <List words={words} /></div>
 </div>
</div>
<div class="container-fluid ">
 <div className="row bg-dark mt-5">
 <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
 <div className="container py-2 mb-3 pb-4"><Employeecomponent/></div></div></div></div>
 <div className="container">

  <div className="row">
 <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center mt-5"><h3>Registration Form</h3></div>
 <div className="col-lg-9 col-xl-8 col-md-12 col-sm-12 m-auto"><Registration/></div></div></div>
 <div class="copyrights mt-5">
  <h6 className="text-white">neelam_hargunani@persistent.com <span className="ml-3 text-info">9503836763</span>  <span className="ml-3"><Link to="/" className="text-info">Back to portfolio</Link></span> </h6>
</div>
           
        </>
    );
}

export default ReactAssignment;
