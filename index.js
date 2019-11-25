import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Header} from './header';


export class Main extends Component {
  constructor() {
    super();
    this.state = {
      
  objStudent:[
    {ID: "1",Name: "Senpai",Gender: "1",Class: "12"},
    {ID: "2",Name: "Panneer",Gender: "1",Class: "12"},
    {ID: "3",Name: "Rajagopalan",Gender: "1",Class: "12"},
    {ID: "4",Name: "Siva",Gender: "1",Class: "12"},
    {ID: "5",Name: "Taj",Gender: "1",Class: "12"},
    {ID: "6",Name: "Usha",Gender: "1",Class: "12"},
    {ID: "7",Name: "Vijay",Gender: "1",Class: "12"},
]
    };
  }

  render() {
    return (
        <React.Fragment>
         <Header/>
        </React.Fragment>
    );
  }
}

render(<Main />, document.getElementById('root'));
