import React from 'react';

const Header = () => {
        return (
            <div>
                <h1>
                    {'Item Grabber'}
                </h1>
                <h4>
                    {'The quickest way to generate an excel sheet based on an excel sheet!'}
                </h4>
                <input name="api"/> API KEY
                <br/>
                <br/>
                <form id = "attributes">
                    <input type="checkbox" name="itemName" value="itemName"/>Item Name
                    <input type="checkbox" name="sku" value="sku"/>SKU
                    <input type="checkbox" name="gtin" value="gtin"/>GTIN
                    <input type="checkbox" name="link" value="link"/>Link
                </form>
            </div>
        );
    }

  export default Header;