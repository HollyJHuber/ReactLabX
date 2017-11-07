import React, { Component } from 'react';
import './index.css';
import GraphComponent from './GraphComponent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">Voting Graph Lab X
        </header>
          <div><button onClick={this.handleClick.bind(this)}>Vanilla</button>votes={this.state.votes}</div>
          <div><button onClick={this.handleClick.bind(this)}>Chocolate</button>votes={this.state.votes}</div>
          <div><button onClick={this.handleClick.bind(this)}>Strawberry</button>votes={this.state.votes}</div>
      </div>
    );
  }

  handleClick() {
      // This is another way to update state. Provide a function that takes
      // the old (previous) state and returns changes for the new state.
      this.setState(prevState => ({ votes: prevState.votes + 1 }));
  }
}

export default App;

// any render function needs to return a single element
// you're going to define the buttons and handle them getting clicked on in App.js