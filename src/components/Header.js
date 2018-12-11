import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>
                    {'Item Grabber'}
                </h1>
                <h4>
                    {'The quickest way to generate an excel sheet based on an excel sheet!'}
                </h4>
                <input 
                    value= {this.props.apikey} 
                    onChange = {this.props.onApiChange}
                /> API KEY
                <br/>
                <br/>
            </div>
        );
    }
}

  export default Header;