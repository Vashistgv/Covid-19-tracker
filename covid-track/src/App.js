import React from 'react';
import './Nav.css';
import NavBar from './Nav'
import Body from './Body'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
