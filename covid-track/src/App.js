import React from 'react';
import './Nav.css';
import NavBar from './component/navBar/NavBar/Nav'
import Body from './Body'
import Footer from './Footer'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">

      <NavBar/>
      
      <Body />
      <Footer />
    </div>
  );
}

export default App;
