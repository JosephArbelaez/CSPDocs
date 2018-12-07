import React, { Component } from 'react';
import Header from '../src/components/Header'
import './App.css';
import Choice from './components/Choice';
import ByFile from './components/ByFile';
import ByText from './components/ByText';

const initialState = {
  choice: 'empty',
  input: '',
  item: {
    itemId: '',
    itemName: '',
    sku: '',
    gtin: '',
    link: ''
  }
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
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // onTextButtonClick = () => {
  //   let input = {this.input};
  // }
  render() {
    const { choice } = this.state;
    return (
      <div className='tc pa4 br4 shadow-5' id= 'card'>
        <Header />
        <br />
        {
          choice === 'file' ?
            <ByFile /> :
            choice === 'text' ? 
              <ByText onInputChange= {this.onInputChange} onTextButtonClick={this.onTextButtonClick}/> :
              <Choice onChoiceButtonClick={this.onChoiceButtonClick}/>
        }
      </div>
    );
  }
}

export default App;