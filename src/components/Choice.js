import React from 'react';

const Choice = ({ onChoiceButtonClick }) => {
    return (
        <div id="choose">
            <button id="byFile" onClick={() => onChoiceButtonClick('file')}>By File</button>
            <button id="byText" onClick={() => onChoiceButtonClick('text')}>By Text</button>
        </div>
    );
}
  export default Choice;