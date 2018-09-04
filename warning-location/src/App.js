/* See license.txt for terms of usage */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph'

/**
 * The root component of the application.
 */
class App extends Component {
  handleClick() {
    console.log("handleClick 2");
    //throw Error('My Error');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={event => this.handleClick(event)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Graph />
        </div>
      </div>
    );
  }
}

export default App;
