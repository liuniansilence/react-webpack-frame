var React = require('react');
var footerPageStyle = require('./footer.useable.css');

class footerComponent extends React.Component{
	constructor(){
        super();
    }

	componentWillMount () {
        footerPageStyle.use();
    }
    componentWillUnmount() {
        footerPageStyle.unuse();
    }
    
    render() {
        return (
            <div className="footer-box">
                @liuniansilence@163.com
            </div>
        );
    }
}

export default footerComponent;
