import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact 
          path="/"
          component={Home}/>  

          <Route exact
          path="/about"
          component={About}/>

          <Route exact
          path="/shop"
          component={Shop}/>

          <Route exact
          path="/shop/:id"
          component={ItemDetail}/>  
        </Switch>
      </div>
    </Router>
  );
}
