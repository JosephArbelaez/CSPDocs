import React, { Component } from 'react';
import Header from '../src/components/Header'
import './App.css';
import Choice from './components/Choice';
import ByFile from './components/ByFile';
import ByText from './components/ByText';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Choice />
        <ByFile />
        <ByText />
      </div>
    );
  }
}

export default App;