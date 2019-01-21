import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js';
import Content from './Content.js';
import Util from './Util.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Content />
          <Util />
        </div>
      </div>
    );
  }
}

export default App;
