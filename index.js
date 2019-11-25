import React, { Component } from 'react';
import { render } from 'react-dom';
import {Details} from './details.js';
import './style.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      
  objEmployee:[
    {name:"Magesh Babu",role:"Trainer",location:"Chennai"},
    {name:"Nithya Priya",role:"Gynacologist",location:"Sydeny"},
    {name:"Panneer Selvam",role:"Architect",location:"Chennai"},
    {name:"Rajagopalan",role:"VP",location:"Kochi"},
    {name:"Siva",role:"Project Manager",location:"Chennai"},
    {name:"Taj",role:"Enterepranur",location:"Villupuram"},
    {name:"Usha",role:"Home Maker",location:"Chennai"},
    {name:"Vijay",role:"GM",location:"Chennai"},
]
    };
  }

  render() {
    return (
     <Details/>
    );
  }
}

render(<App />, document.getElementById('root'));
