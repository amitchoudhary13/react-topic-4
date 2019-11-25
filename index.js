import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Header} from './Header';
import {Details} from "./Details";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      
  objStudent:[
    {ID: "1",Name: "Senpai",Gender: "m",Class: "12"},
    {ID: "2",Name: "Panneer",Gender: "m",Class: "12"},
    {ID: "3",Name: "Rajagopalan",Gender: "m",Class: "12"},
    {ID: "4",Name: "Siva",Gender: "m",Class: "12"},
    {ID: "5",Name: "Taj",Gender: "m",Class: "12"},
    {ID: "6",Name: "Usha",Gender: "m",Class: "12"},
    {ID: "7",Name: "Vijay",Gender: "m",Class: "12"},
]
    };
  }

  render() {
    return (
        <React.Fragment>
         <Header/>
         <Details detail={this.state.objStudent} />
        </React.Fragment>
    );
  }
}

render(<Main />, document.getElementById('root'));
