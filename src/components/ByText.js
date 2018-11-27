import React from 'react';

class ByText extends React.Component{
    render(){
        return (
            <div id = "text">
                <form >
                    <textarea name = "textArea" form = "text"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
  export default ByText;