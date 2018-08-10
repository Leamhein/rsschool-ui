import * as React from 'react';
import Dropzone from 'react-dropzone';
import './index.css';

class DragNDropPanel extends React.Component<any, any> {
    onDrop(acceptedFiles: any) {
        return acceptedFiles;
    }

    render() {
        return (
            <Dropzone accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onDrop={this.onDrop}>
                {'Drop .xlsx file here or click to select file to upload'}
            </Dropzone>
        );
    }
}

export default DragNDropPanel;
