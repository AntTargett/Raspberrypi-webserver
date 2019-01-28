import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{display:"flex" }}>
        <div style={{border:"1px solid", flex:"1", justifyContent: 'center',}}>
             Hi there
        </div>
        <div style={{border:"1px solid"}}>
          Sdf
        </div>
        <div style={{border:"1px solid"}}>
          sdfd
        </div>
      </div>
    );
  }
}

export default App;
