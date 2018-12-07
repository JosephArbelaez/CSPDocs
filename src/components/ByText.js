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
        if (event.target.value === '' || regex.test(event.target.value)) {
            this.setState({textInput: event.target.value});
            document.getElementById("error").innerHTML = "";
            document.getElementById("submitButton").disabled = false;
         } else {
            document.getElementById("error").innerHTML = "Text must only contain digits"
            document.getElementById("submitButton").disabled = true;
        }
    }

    onSubmit = () => {
        console.log (this.state.textInput);
    }
    render() {
        return (
            <div id = "text">
                <form >
                    <textarea id="textArea" name = "textArea" form = "text" onChange={this.onTextChange} />
                </form>
                <input id="submitButton" type="submit" onClick= {this.onSubmit}></input>
                <div id="error"></div>
                </div>
            );
    }
    }
  export default ByText;