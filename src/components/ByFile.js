import React from 'react';
import classNames from 'classnames'
import Dropzone from 'react-dropzone';
import readXlsxFile from 'read-excel-file'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { CSVDownload } from "react-csv";

class ByFile extends React.Component{

    // Dropzone Styling
    onDrop = (acceptedFiles, rejectedFiles) => {
        let itemIds = "";
        let data =[
            ["ITEM ID", "UPC", "NAME", "LINK"]
        ];
        let apiKey = this.props.apikey;

        ReactDOM.render(<div className="f6 link dim ph3 dib black bg-light-blue" ><h3>Fetching Data...</h3></div>, document.getElementById('error'));

        readXlsxFile(acceptedFiles[0]).then((rows) => {
            for (let i = 1; i < rows.length; i++){
                if (i === 1){
                    itemIds += `${rows[i][0]}`;
                } else {
                    itemIds += `,${rows[i][0]}`;
                }
            }
            let walmartURL = `https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items?ids=${itemIds}&apiKey=${apiKey}&format=json`
            axios.get(walmartURL)
                .then((res) => {
                    if (res.status === 200){
                        for (let i = 0; i < res.data.items.length; i++){
                            let item = [res.data.items[i].itemId,
                            `UPC: ${res.data.items[i].upc}`, 
                            res.data.items[i].name, 
                            `https://www.walmart.com/ip/${res.data.items[i].itemId}`]
            
                            data.push(item);
                        }
    
                        // This is what causes the spreadsheet to appear
                        ReactDOM.render(<CSVDownload data={data} target="_blank" /> , document.getElementById('error'));
        
                        // Transforms the DOM back to blank so that if you click submit again it'll generate a new Spreadsheet.
                        ReactDOM.render(<div></div>, document.getElementById('error'));
                    }
        }).catch((err) => {
                if (err.response.status === 403){
                    ReactDOM.render(<div className="f6 link ph3 dib black bg-red"><h3>Please enter an API key</h3></div>, document.getElementById('error'));
                }
                if (err.response.status >= 500){
                    ReactDOM.render(<div className="f6 link ph3 dib black bg-red"><h3>There is an issue with WalmartLabs API Server, please try again later</h3></div>, document.getElementById('error'));
                }
            })
        })
    }

    render(){
        const baseStyle = {
            width: 200,
            height: 200,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5,
            alignContent: 'center',
            margin: 'auto',
            };
            const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: '#eee',
            alignContent: 'center'
            };
            const rejectStyle = {
            borderStyle: 'solid',
            borderColor: '#c66',
            backgroundColor: '#eee',
            alignContent: 'center'
        };
        return (
            <div id='dropzone'>
                <br />
                <a href="https://s3.amazonaws.com/joewalmart/walmart/ItemID+Template.xlsx"> ItemGrabber Template</a>
                <br />
                <div id="error"></div>
                <br />
                <div id="dropzone">
                    <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps, isDragActive, isDragReject}) => {
                            let styles = {...baseStyle};
                            styles = isDragActive ? {...styles, ...activeStyle} : styles
                            styles = isDragReject ? {...styles, ...rejectStyle} : styles
                        return (
                            <div
                            {...getRootProps()}
                            className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                            style={styles}
                            >
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <p>Drop files here...</p> :
                                <p>Try dropping some files here, or click to select files to upload.</p>
                            }
                            </div>
                        )
                        }}
                    </Dropzone>
                </div>
            </div>
            
        );
    }
}
  export default ByFile;