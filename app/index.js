import React, { Component, PropTypes } from 'react';
import 'antd/dist/antd.css';
var GLOBAL_CONFIG = require('./conf/conf.js');
var ReactDOM = require('react-dom');
var Router = require('react-router/lib/Router');
import { hashHistory, Link } from 'react-router';
var projectName = GLOBAL_CONFIG.projectName;

// 首页顶部标题栏部分
import HeaderElement from './component/widget/header/header.js';
// 首页底部状态栏部分
// import FooterElement from './component/widget/footer/footer.js';

class App extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="ecnu-page">
                <HeaderElement title='data'/>
                <div className="wrap-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

var subRoutes = [
    {
        path: 'dataAnalyse',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/dataAnalyse/dataAnalyse.js'));
            }, 'dataAnalyse');
        },
        onEnter: function () {
            
        },
        onLeave: function () {

        }
    },
    {
        path: 'home',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/home/home.js'));
            }, 'home');
        },
        onEnter: function () {

        },
        onLeave: function () {

        }
    }
];

var RootRoute = {
    childRoutes: [{
        path: '/',
        component: App,
        indexRoute: {
            getComponent: function (nextState, cb) {
                require.ensure([], function (require) {
                    cb(null, require('./page/home/home.js'));
                }, 'home');
            }
        },
        childRoutes: subRoutes
    }]
};

window.onload = function() {
    ReactDOM.render((
        <Router routes={RootRoute} history={hashHistory}/>
    ), document.querySelector('#ecnu-app'));
};
