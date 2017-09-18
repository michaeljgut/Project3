import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="Homepage">
        <Header />
          <div className='Home-content'>
            <h1>hello world</h1>
          </div>
      </div>
    );
  }
}

export default App;
