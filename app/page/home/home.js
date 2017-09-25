

var React = require('react');
import homeStyle from './home.useable.less';


class homeComponent extends React.Component{
	constructor () {
		super();
	}
	componentWillMount () {
        homeStyle.use();
    }
    componentWillUnmount () {
        homeStyle.unuse();
    }
    render () {
        return ( 
            <div className="home-box">
                
                show-Home
            </div>
        );
    }
}
module.exports = homeComponent;
