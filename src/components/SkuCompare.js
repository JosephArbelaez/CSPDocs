import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import readXlsxFile from 'read-excel-file';
import CSVReader from 'react-csv-reader';
import CSVDownload from  "react-csv";

const itemReportArray = [];
const skuTemplate = [];
const matchArray = [];

class SkuCompare extends React.Component {

    handleFiles = (files) => {
        files.forEach(file => {
            itemReportArray.push(file[1]);
        });
        itemReportArray.pop();
        itemReportArray.shift();
      }

    onDropSKUTemplate = (acceptedFiles) => {
        readXlsxFile(acceptedFiles[0]).then((rows) => {
            rows.forEach(row =>{
                skuTemplate.push(row[0]).toString();
            })
            skuTemplate.shift();
            skuTemplate.forEach(sku => {
                if (itemReportArray.includes("=\"" + sku +"\"")){
                    matchArray.push(sku);
                }
            })
            let data = matchArray.toString();
            ReactDOM.render(<CSVDownload data={data} target="_blank" /> , document.getElementById('error'));
        })
    }

    render() {
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
        const csvReaderStyle = {
                width: 200,
                height: 200,
                borderWidth: 2,
                borderColor: '#666',
                borderStyle: 'dashed',
                borderRadius: 5,
                alignContent: 'center',
                margin: 'auto',
            };
        
        return (
            <div>
                <div id="dropzone">
                <div id="csv">
                    <h4>Step 1: Submit item report.</h4>
                    <CSVReader
                        cssClass="csv-reader-input"
                        onFileLoaded={this.handleFiles}
                        inputId="ObiWan"
                        inputStyle={csvReaderStyle} 
                    />
                </div>
                <div id="xlxs">
                    <h4>Step 2: Submit list of skus</h4>
                    <a href="https://s3.amazonaws.com/joewalmart/walmart/SKU+Compare+Template.xlsx">Template</a>
                        <Dropzone onDrop={this.onDropSKUTemplate}>
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
                <div id="error"></div>
            </div>
        );
    }
}
export default SkuCompare;