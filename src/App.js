import React, { Component } from 'react';
import './index.css';
import GraphComponent from './GraphComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Voting Graph Lab X
        </header>
          <div><button>Vanilla</button></div>
          <div><button>Chocolate</button></div>
          <div><button>Strawberry</button></div>
      </div>
    );
  }
}

export default App;

// any render function needs to return a single element
// you're going to define the buttons and handle them getting clicked on in App.js