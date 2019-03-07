import React, { Component } from 'react';
import Header from '../src/components/Header'
import './App.css';
import ByFile from './components/ByFile';
import ByText from './components/ByText';
import SkuCompare from './components/SkuCompare';
import Navbar from './components/structuralComponents/navbar';
import 'tachyons';

const initialState = {
  choice: 'empty',
  input: '',
  apiKey: '',
  menu: 'empty'
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onChoiceButtonClick = (choice) => {
    this.setState({choice: choice});
  }

  onNavLinkClick = (menu) => {
    this.setState({menu: menu});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onApiChange = (event) => {
    this.setState({apiKey: event.target.value});
  }

  render() {
    const { choice, menu } = this.state;
    return (
      <div className='tc pa4 br4 shadow-5' id= 'card'>
        <Navbar 
          onNavLinkClick= {this.onNavLinkClick} 
          onChoiceButtonClick={this.onChoiceButtonClick} 
          menu= {menu} />
        <Header />
        {
          choice === 'file' ? 
            (
              <ByFile 
                apikey={this.state.apiKey} 
                onApiChange = {this.onApiChange}/> 
            ) : choice === 'text' ? 
            (
              <ByText 
                onInputChange= {this.onInputChange} 
                onTextButtonClick={this.onTextButtonClick}
                apikey={this.state.apiKey}
                onApiChange = {this.onApiChange}/> 
            ) : choice === 'skuCompare' ? 
            (
                <SkuCompare></SkuCompare> 
            ) :
            (
              <div></div>
            )
        }
      </div>
    );
  }
}

export default App;