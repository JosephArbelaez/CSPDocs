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
                <form id = "attributes">
                    <input type="checkbox" name="itemName" value="itemName" checked="true"/>Item Name
                    <input type="checkbox" name="sku" value="sku"/>SKU
                    <input type="checkbox" name="gtin" value="gtin"/>GTIN
                    <input type="checkbox" name="link" value="link" checked="true"/>Link
                </form>
            </div>
        );
    }
}
  export default Header;