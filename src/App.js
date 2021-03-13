import React from 'react';
import './App.css';

import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CrudApplication from './components/crud-application/CrudApplication';
import ReactAssignment from './components/react-assignment/ReactAssignment';

function App() {
  
  return (
    <Router>
  
   
     <Route path="/Portfolio" exact component= {Portfolio}/>
    <Route path ="/reactassignment" exact component={ReactAssignment}/>
    <Route  path ="/crudapplication" exact component={CrudApplication}/>
 
      
   
      </Router>
      
  );
}

export default App;
