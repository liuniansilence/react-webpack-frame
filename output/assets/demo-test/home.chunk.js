webpackJsonp([0],{

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(240)(undefined);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n}\nbody {\n  background-color: #f0f3f3;\n  font-family: \"\\5B8B\\4F53\", \"\\5FAE\\8F6F\\96C5\\9ED1\", \"arial\";\n  font-size: 30px;\n}\n/*浮动*/\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n/*清除浮动*/\n.clearfix:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n  clear: both;\n}\n.clearfix {\n  zoom: 1;\n}\n.home-box {\n  color: red;\n}\n.upload-list-inline .ant-upload-list-item {\n  float: left;\n  width: 200px;\n  background-color: #fff;\n  margin-right: 8px;\n}\n.upload-list-inline .ant-upload-animate-enter {\n  animation-name: uploadAnimateInlineIn;\n}\n.upload-list-inline .ant-upload-animate-leave {\n  animation-name: uploadAnimateInlineOut;\n}\n", ""]);

// exports


/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1274);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(242)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./home.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./home.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _getPrototypeOf = __webpack_require__(92);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = __webpack_require__(112);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(110);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(111);

var _index6 = _interopRequireDefault(_index5);

var _antd = __webpack_require__(553);

var _home = __webpack_require__(1278);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    homeComponent: {
        displayName: 'homeComponent'
    }
};

var _DWorkspaceReactWebpackFrameNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'D:/workspace/react-webpack-frame/app/page/home/home.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _DWorkspaceReactWebpackFrameNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'D:/workspace/react-webpack-frame/app/page/home/home.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _DWorkspaceReactWebpackFrameNode_modulesReactTransformHmrLibIndexJs2(_DWorkspaceReactWebpackFrameNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var React = __webpack_require__(0);

var homeComponent = _wrapComponent('homeComponent')(function (_React$Component) {
    (0, _inherits3.default)(homeComponent, _React$Component);

    function homeComponent() {
        (0, _classCallCheck3.default)(this, homeComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (homeComponent.__proto__ || (0, _getPrototypeOf2.default)(homeComponent)).call(this));

        var props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text'
            },
            onChange: function onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    _antd.message.success(info.file.name + ' file uploaded successfully');
                } else if (info.file.status === 'error') {
                    _antd.message.error(info.file.name + ' file upload failed.');
                }
            }
        };

        _this.uploadProps = props;
        return _this;
    }

    (0, _createClass3.default)(homeComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // homeStyle.use();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // homeStyle.unuse();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'home-box' },
                React.createElement(
                    _antd.Upload,
                    this.uploadProps,
                    React.createElement(
                        _antd.Button,
                        null,
                        React.createElement(_antd.Icon, { type: 'upload' }),
                        ' Click to Upload'
                    )
                )
            );
        }
    }]);
    return homeComponent;
}(React.Component));

module.exports = homeComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)(module)))

/***/ })

});