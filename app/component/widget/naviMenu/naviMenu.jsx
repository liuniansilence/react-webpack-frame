import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import {
    hashHistory, Link
}
from 'react-router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NaviMenu extends React.Component {
	constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
		this.state = {
			current: 'mail'
		}
	}

	handleClick(e) {
		if (this.state.current != e.key) {
			this.setState({
				current: e.key,
			});
			hashHistory.push({
				pathname: `/${e.key}`
			})
		}
	}

	render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Icon type="home" />Home
                </Menu.Item>
                <Menu.Item key="dataAnalyse">
                    <Icon type="appstore" />Data Analyse
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />Graph</span>}>
                    <Menu.Item key="setting1"><Icon type="bars" />setting 1</Menu.Item>
                    <Menu.Item key="setting2"><Icon type="bars" />setting 2</Menu.Item>
                    <Menu.Item key="setting3"><Icon type="bars" />setting 3</Menu.Item>
                    <Menu.Item key="setting4"><Icon type="bars" />setting 4</Menu.Item>
                </SubMenu>
                <Menu.Item key="tool">
                    <Icon type="tool"/>setting
                    <a href="/demo/setting" rel="noopener noreferrer"></a>
                </Menu.Item>
            </Menu>
        );
  }
}

module.exports = NaviMenu;
