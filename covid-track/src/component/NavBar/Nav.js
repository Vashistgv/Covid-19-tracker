import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './rightMenu'

class Navbar extends Component {

  render() {
    return (
        <nav className="menuBar">
        	<div className="logo">
        		<a href="">logo</a>
        	</div>
        	<div className="menuCon">
        		<div className="leftMenu">
	        		<LeftMenu />
				    </div>
				    <div className="rightMenu">
	        			<RightMenu />
				    </div>
        	</div>
        </nav>
    );
  }
}

export default Navbar;