import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1 id='header'>
                    {'Item Grabber'}
                </h1>
                <h4 id='header'>
                    {'The quickest way to generate an excel sheet based on an excel sheet!'}
                </h4>
                <input 
                    value= {this.props.apikey} 
                    onChange = {this.props.onApiChange}
                    id='header'
                /> API KEY
                <br/>
                <br/>
            </div>
        );
    }
}

  export default Header;