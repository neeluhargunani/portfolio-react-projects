import React from 'react'
import { Card} from 'react-bootstrap';
import CurrDateTime from '../AssignmentComponents/CurrDateTime';

const Header = () => {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting='';
    let approachVisit='';
    const greetStyle={ };

   if(curDate >=1 && curDate <12){
     greeting ='Good Morning';
     approachVisit='Welcome To My React-World';
     greetStyle.color ='green';
     greetStyle.background ='#000';
   
   }else if(curDate>=12 && curDate <16){
       greeting ='Good Afternoon';
       approachVisit='Welcome To My React-World';
       greetStyle.color ='orange';
       greetStyle.background ='#000';
   }else{
    if(curDate>=16 && curDate <20){
        greeting ='Good Evening';
        approachVisit='Welcome To My React-World';
        greetStyle.color ='Yellow';
        greetStyle.background ='#000';
    }else{
        greeting ='Good Night';
        approachVisit='Do Visit My React-World';
        greetStyle.color ='#000';
        greetStyle.background ='#fff';
    }

   }

    return (
        <>
     <div className="container">
    <div className="row">
    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 ">
      <Card className="py-2">
      
  <Card.Body className=" banner-text">
  <CurrDateTime/>
  <h2 className="py-2 mt-2">Hello Myself Neelam Hargunani</h2>
   <h2><span style={greetStyle} >{greeting}</span> </h2>
  <h3 className="mb-3"><span >{approachVisit}</span> </h3>
  

  </Card.Body>
</Card>
</div>
</div>
</div>
       </>
    )
}

export default Header;
