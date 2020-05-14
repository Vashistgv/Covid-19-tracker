import React, { Component } from 'react';
import { Menu } from 'antd';

class RightMenu extends React.Component {
    render() {
        return(
            <Menu theme="dark" mode="horizontal">
            <Menu.Item key="signin">
                <a href="#">sign in</a>
            </Menu.Item>
            <Menu.Item key="app">
            <a href="#">Signup</a>
          </Menu.Item>
        </Menu>
        )
    }
}
export default RightMenu;