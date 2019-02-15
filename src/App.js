import React, { Component } from 'react';
import Header from '../src/components/Header'
import './App.css';
import Choice from './components/Choice';
import ByFile from './components/ByFile';
import ByText from './components/ByText';
import SkuCompare from './components/SkuCompare'

const initialState = {
  choice: 'empty',
  input: '',
  apiKey: '',
}

class App extends Component {
  
  constructor() {
    super();
    this.state = initialState;
  }

  onChoiceButtonClick = (choice) => {
    if (choice === 'file'){
      this.setState({choice: choice});
    }
    if (choice === 'text'){
      this.setState({choice: choice});
    }
    if (choice === 'skuCompare'){
      this.setState({choice: choice});
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onApiChange = (event) => {
    this.setState({apiKey: event.target.value});
  }

  render() {
    const { choice } = this.state;
    return (
      <div className='tc pa4 br4 shadow-5' id= 'card'>
        <Header value = {this.state.apiKey} onApiChange = {this.onApiChange}/>
        <br />
        <Choice onChoiceButtonClick={this.onChoiceButtonClick}/>
        {
          choice === 'file' ?
            <ByFile apikey={this.state.apiKey}/> :
            choice === 'text' ? 
              <ByText 
                onInputChange= {this.onInputChange} 
                onTextButtonClick={this.onTextButtonClick}
                apikey={this.state.apiKey}/> :
                choice === 'skuCompare' ?
                <SkuCompare></SkuCompare> :
              <div></div>
        }
      </div>
    );
  }
}

export default App;