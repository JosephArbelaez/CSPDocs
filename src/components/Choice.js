import React from 'react';

const Choice = ({ onChoiceButtonClick }) => {
    return (
        <div>
            <button className = 'w-10 grow f4 link ph3 pv2 dib white bg-light-blue' id="byFile" onClick={() => onChoiceButtonClick('file')}>By File</button>
            <button className = 'w-10 grow f4 link ph3 pv2 dib white bg-light-blue' id="byText" onClick={() => onChoiceButtonClick('text')}>By Text</button>
        </div>
    );
}
  export default Choice;