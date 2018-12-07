import React from 'react';

// Use sign in as reference.

class ByText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
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
        console.log(idArray[0]);
        let matrix = [
            [idArray[0], 'SKU', 'GTIN', 'Link']
        ]
        for (let i = 1; i < idArray.length; i++){
            matrix.push([idArray[i].trim(), 'SKU', 'GTIN', 'Link']);
        }
        console.log(matrix)
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