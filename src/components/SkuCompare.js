import React from 'react';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import readXlsxFile from 'read-excel-file'
import ReactDOM from 'react-dom';

class SkuCompare extends React.Component {

    onDropItemReport = (acceptedFiles, rejectedFiles) => {
        console.log(acceptedFiles);

        readXlsxFile(acceptedFiles[0]).then((rows) => {
            
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
        return (
            <div>
                <div id="dropzone">
                <Dropzone onDrop={this.onDropItemReport}>
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
export default SkuCompare;