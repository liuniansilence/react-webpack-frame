var React = require('react');
var contentPageStyle = require('./content.useable.css');

var contentComponent = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function () {
        contentPageStyle.use();
    },
    componentWillUnmount: function() {
        contentPageStyle.unuse();
    },
    render: function() {
        return (
            <div className="content-box">
                Home
            </div>
        );
    }
});
module.exports = contentComponent;
