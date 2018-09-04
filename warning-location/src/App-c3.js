/* See license.txt for terms of usage */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

const LineChart = ({ data }) =>
  <C3Chart
    data={{ json: data, type: 'spline' }}
    //data={{ url: '/data/test.csv', type: 'spline' }}
    zoom={{ enabled: true }}
    subchart={{ show: true }}
  />;

let chartData = {
  line: {
    Outside: [],
    Inside: [],
    Solution: []
  },
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let max = 400;
for (let i=0; i<100; i++) {
  chartData.line.Outside.push(getRandomInt(max));
  chartData.line.Inside.push(getRandomInt(max));
  chartData.line.Solution.push(getRandomInt(max));
}

/**
 * The root component of the application.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <LineChart data={chartData.line} />
        </div>
      </div>
    );
  }
}

export default App;
