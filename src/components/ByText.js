import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { CSVDownload } from "react-csv";

class ByText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
        }
    }

    onTextChange = (event) => {
        const regex = /^[0-9\b]+$/;
        if (this.state.textInput === '' || regex.test(this.state.textInput)) {
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
        let idArray = this.state.textInput.split(",")
        let apiKey = this.props.apikey;
        let itemIds = '';
        let matrix = [idArray[0]];
        let data =[
            ["ITEM ID", "UPC", "NAME", "LINK"]
        ];

        // Removing whitespace in array
        for (let i = 0; i < idArray.length; i++) {
            idArray[i] = idArray[i].replace(/^\s\s*/, '').replace(/s\s\s*$/, '');
        }

        // Adding items to matrix to prep for API Call
        for (let i = 1; i < idArray.length; i++){
            matrix.push(idArray[i]);
        }

        // Prep itemId string for API call
        for (let i = 0; i < idArray.length; i++){
            itemIds = itemIds + idArray[i] + ',';
        }

        /*
            MUST Change this in the future to send only 20 items at a time.
        */
        itemIds = itemIds.substr(0, itemIds.length - 1);
        let walmartURL = `https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=${itemIds}&apiKey=${apiKey}&format=json`;

        axios.get(walmartURL).then((res) => {
            for (let i = 0; i < res.data.items.length; i++){
                let item = [res.data.items[i].itemId,
                `UPC: ${res.data.items[i].upc}`, 
                res.data.items[i].name, 
                `https://www.walmart.com/ip/${res.data.items[i].itemId}`]

                data.push(item);
            }  

            // This is what causes the spreadsheet to appear
            ReactDOM.render(<CSVDownload data={data} target="_blank" /> , document.getElementById('error'));

            // Transforms the DOM back to blank so that if you click submit again it'll generate a new Spreadsheet.
            ReactDOM.render(<div></div>, document.getElementById('error'));
        }).catch((err) => {
            if (err.response.status === 403){
                ReactDOM.render(
                    <div className="f6 link ph3 dib black bg-red">
                        <h3>Please enter an API key</h3>
                    </div>, document.getElementById('error')
                );
            }
            if (err.response.status >= 500){
                ReactDOM.render(
                    <div className="f6 link ph3 dib black bg-red">
                        <h3>There is an issue with WalmartLabs API Server, please try again later</h3>
                    </div>, document.getElementById('error')
                );
            }
        })
    }

    render() {
        return (
            <div id = "text">
                <div id = "error" ></div>
                <input 
                    value= {this.props.apikey} 
                    onChange = {this.props.onApiChange}
                    id='header'
                    placeholder="API KEY"
                />
                <br />
                <br />
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
            </div>
        );
    }
}

export default ByText;