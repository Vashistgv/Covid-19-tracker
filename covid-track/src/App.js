import React from 'react';

import NavBar from './component/NavBar/Nav'
import Body from './Body'
import FooterComponent from './component/Footer/Footer'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">

      <NavBar/>
      
      <Body />
      <FooterComponent />
    </div>
  );
}

export default App;
