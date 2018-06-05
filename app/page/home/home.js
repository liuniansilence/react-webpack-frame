var React = require('react');
import { Upload, message, Button, Icon } from 'antd';
import homeStyle from './home.less';


class homeComponent extends React.Component{
	constructor () {
        super();

        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
        };

        this.uploadProps = props;
	}
	componentWillMount () {
        // homeStyle.use();
    }
    componentWillUnmount () {
        // homeStyle.unuse();
    }
    render () {
        return ( 
            <div className="home-box">
               <Upload {...this.uploadProps}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}
module.exports = homeComponent;
