var React = require('react');
var footerPageStyle = require('./footer.useable.css');

var footerComponent = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function () {
        footerPageStyle.use();
    },
    componentWillUnmount: function() {
        footerPageStyle.unuse();
    },
    render: function() {
        return (
            <div className="footer-box">
                @liuniansilence@163.com
            </div>
        );
    }
});
module.exports = footerComponent;
