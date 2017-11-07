import React, { Component } from 'react';
import './index.css';
import GraphComponent from './GraphComponent';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            votesV: 0,
            votesC: 0,
            votesS: 0,
        };
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">Voting Graph Lab X
        </header>
        <GraphComponent />
          <div><button className = "vanilla" onClick={this.handleClickV.bind(this)}>{this.state.votesV} Vanilla</button></div>
          <div><button className = "chocolate"  onClick={this.handleClickC.bind(this)}>{this.state.votesC} Chocolate</button></div>
          <div><button className = "strawberry" onClick={this.handleClickS.bind(this)}>{this.state.votesS} Strawberry</button></div>
      </div>
    );
  }

  handleClickV() {
    this.setState(prevState => ({ votesV: prevState.votesV + 1 })); 
  }
   handleClickC() {
      this.setState(prevState => ({ votesC: prevState.votesC + 1 }));
  }
   handleClickS() {
      this.setState(prevState => ({ votesS: prevState.votesS + 1 }));
  }
}

export default App;

// any render function needs to return a single element
// you're going to define the buttons and handle them getting clicked on in App.js