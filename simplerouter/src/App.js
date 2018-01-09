import React, { Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Home} from './page1';
import {About} from './page2';
import {Topics} from './page3';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/Home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)








export  {BasicExample}
