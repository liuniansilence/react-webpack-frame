var React = require('react');
var headeStyle = require('./header.less');
import NaviMenu from '../naviMenu/naviMenu.js';

class headerComponent extends React.Component{
	constructor(){
        super();
    }
	componentWillMount () {
        // headeStyle.use();
    }
    componentWillUnmount() {
        // headeStyle.unuse();
    }
    render() {
        return (
            <div className='header-box'>
                <div className="wrap-title">
                    React-webpack
                </div>
                <div className="wrap-naviMenu">
                    <NaviMenu/>
                </div>
            </div>
        );
    }
}
module.exports = headerComponent;
