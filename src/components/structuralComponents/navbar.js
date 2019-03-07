import React from 'react';

const Navbar = ({ onNavLinkClick, onChoiceButtonClick , menu, choice}) => {
    return (
        <div className= "navbar">
        <button className= "link" onClick={() => onChoiceButtonClick('skuCompare')}>Sku Compare</button>
            <div className="dropdown">
                <button className="dropbutton" onClick= {() => onNavLinkClick('itemGrabber')}>
                    ItemGrabber
                    <i className='fa fa-caret-down'></i>
                </button>
                <div className="dropdown-content1">
                    <button className= "content"id="byFile" onClick={() => onChoiceButtonClick('file')}>By File</button>
                    <button className= "content" id="byText" onClick={() => onChoiceButtonClick('text')}>By Text</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;