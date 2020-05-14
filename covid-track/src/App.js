import React from 'react';

import NavBar from './component/NavBar/Nav'
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
