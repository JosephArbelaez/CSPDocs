import React from 'react';

const Choice = ({ onChoiceButtonClick }) => {
    return (
        <div>
            <button className= "f6 link dim ph3 pv2 mb2 dib black bg-light-blue"id="byFile" onClick={() => onChoiceButtonClick('file')}>By File</button>
            <button className= "f6 link dim ph3 pv2 mb2 dib black bg-light-blue" id="byText" onClick={() => onChoiceButtonClick('text')}>By Text</button>
        </div>
    );
}
  export default Choice;