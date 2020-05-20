import React, { Component } from 'react';
import { Menu} from 'antd';
import './LeftMenu.scss'
import SideDrawer from './sideDrawer'

class LeftMenu extends Component {
  render() {
    return ( 
			<Menu theme="dark" mode="horizontal">   
      <Menu.Item key="button">
        <SideDrawer/>
        </Menu.Item>
      	<Menu.Item key="mail">
          <a className="left" href="#">Home</a>
        </Menu.Item>
    
        <Menu.Item key="alipay">
          <a href="#">Contact Us</a>
        </Menu.Item>
      </Menu>   
    );
  }
}

export default LeftMenu;