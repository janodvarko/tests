/* See license.txt for terms of usage */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dygraph from 'dygraphs';

//import Chart from 'chart.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var data = {
  //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
      label: '# of Votes',
      data: [],
  }]
};

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLabel() {
  let labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
  return labels[getRandomInt(0, 5)];
}

let lastOne = 10;
for (let i=0; i<3000; i++) {
  //data.labels.push(getRandomLabel());

  let value = getRandomInt(Math.max(41, lastOne-2), Math.min(lastOne+2, 79));
  data.datasets[0].data.push({
    x: i*10,
    y: value,
  });

  lastOne = value;
}

// Any of the following formats may be used
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {
//         animation: {
//             duration: 0, // general animation time
//         },
//         hover: {
//             animationDuration: 0, // duration of animations when hovering an item
//         },
//         responsiveAnimationDuration: 0, // animation duration after a resize
//         showLines: true, // disable for all datasets
//         elements: {
//             line: {
//                 tension: 0, // disables bezier curves
//             }
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     stepSize: 10,
//                     suggestedMin: 0,
//                     suggestedMax: 100,
//                 }
//             }],
//             xAxes: [{
//                 type: "time",
//                 time: {
//                     displayFormats: {
//                         millisecond: 'SSS'
//                     }
//                 }
//             }]
//         }
//     }
// });


// const g = new Dygraph(document.getElementById('graph'),
// `Date,A,B
// 2016/01/01,10,20
// 2016/07/01,20,10
// 2016/12/31,40,30
// `, {
//   fillGraph: true
// });


