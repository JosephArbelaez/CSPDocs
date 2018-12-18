import React from 'react';
const axios = require('axios');
class ByText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
        }
    }

    onTextChange = (event) => {
        const regex = /^[0-9\b]+$/;
        if (this.state.textInput === '' || regex.test(this.state.textInputr)) {
            this.setState({textInput: event.target.value});
            document.getElementById("error").innerHTML = "";
            document.getElementById("submitButton").disabled = false;
         } else {
            document.getElementById("error").innerHTML = "Text must only contain digits"
            document.getElementById("submitButton").disabled = true;
        }
    }

    /* Whenever you call this array, make sure to .trim() idArray.*/
    onSubmit = () => {

        let ids = this.state.textInput;
        let idArray = ids.split(",");
        let apiKey = this.props.apikey;
        let itemIds = '';
        let matrix = [
            [idArray[0], 'SKU', 'GTIN', 'Link']
        ]

        // Removing whitespace in array
        for (let i = 0; i < idArray.length; i++) {
            idArray[i] = idArray[i].replace(/^\s\s*/, '').replace(/s\s\s*$/, '');
        }

        // Adding items to matrix to prep for excel sheet
        for (let i = 1; i < idArray.length; i++){
            matrix.push([idArray[i], 'SKU', 'GTIN', 'Link']);
        }

        // Prep itemId string for API call
        for (let i = 0; i < idArray.length; i++){
            itemIds = itemIds + idArray[i] + ',';
        }

        /*
            MUST Change this in the future to send only 20 items at a time.
        */
        itemIds = itemIds.substr(0, itemIds.length - 1);
        let walmartURL = `http://api.walmartlabs.com/v1/items?ids=${itemIds}&apiKey=${apiKey}&format=json`;
        /*
            Now going to create a node.js server so that I can create and utilize
            any amount of requests.
        */

        // fetch()
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
    }

    render() {
        return (
            <div id = "text">
                <form >
                    <textarea 
                    id="textArea" 
                    name = "textArea" 
                    form = "text" 
                    onChange = {(event)=> {
                        this.setState({
                            textInput: event.target.value
                            });
                        }} 
                        input={this.state.textInput}/>
                </form>
                <input id="submitButton" type="submit" onClick= {this.onSubmit}></input>
                <div id="error"></div>
                </div>
            );
    }
}
  export default ByText;