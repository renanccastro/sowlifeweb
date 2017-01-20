import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar router={this.props.router}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
