import React from 'react';

class Choice extends React.Component{
    render(){
        return (
            <div id="choose">
                <button id="byFile">By File</button>
                <button id="byText">By Text</button>
            </div>
        );
    }
}
  export default Choice;