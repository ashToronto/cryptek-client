import React, { Component } from 'react';
import Cryptocurrency from './components/Cryptocurrency';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="fixed-navbar"><Navigation /></div>
        <div className="Layout">
          <Cryptocurrency />
        </div>
      </div>
    );
  }
}

export default App;
