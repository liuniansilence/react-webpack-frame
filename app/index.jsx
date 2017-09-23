import React, { Component, PropTypes } from 'react';
import 'antd/dist/antd.css';
var GLOBAL_CONFIG = require('./conf/conf.js');
var ReactDOM = require('react-dom');
var Router = require('react-router/lib/Router');
import { hashHistory, Link } from 'react-router';
var projectName = GLOBAL_CONFIG.projectName;

// 首页顶部标题栏部分
var HeaderElement = require('./component/widget/header/header.jsx');
var NaviMenu = require('./component/widget/naviMenu/naviMenu.jsx')
// 首页底部状态栏部分
var FooterElement = require('./component/widget/footer/footer.jsx');

var App = React.createClass({
    render: function() {
        return (
            <div className="ecnu-page">
                <HeaderElement title='data'/>
                <NaviMenu/>
                {this.props.children}
                <FooterElement/>
            </div>
        );
    }
});

var subRoutes = [
    {
        path: 'dataAnalyse',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/dataAnalyse/dataAnalyse.jsx'));
            }, 'dataAnalyse');
        },
        onEnter: function () {
            console.log('dataAnalyse');
        },
        onLeave: function () {

        }
    },
    {
        path: 'home',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/home/home.jsx'));
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
                    cb(null, require('./page/home/home.jsx'));
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
