import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './rightMenu'

import './Nav.css';
class Navbar extends Component {

  render() {
    return (
        <nav className="menuBar">		 
        	<div className="logo">
        		<a href="" className="LogoImg"></a>
        	</div>
        	<div className="menuCon">
        		<div className="leftMenu">
	        		<LeftMenu />
				    </div>
        	</div>
        </nav>
    );
  }
}

export default Navbar;