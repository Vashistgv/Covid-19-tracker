import React , {Suspense, lazy} from 'react';

import NavBar from './component/NavBar/Nav'
import FooterComponent from './component/Footer/Footer'
import 'antd/dist/antd.css';


const Body = lazy(() => import('./Body'));

function App() {
  return (
    <div className="App">

      <NavBar/>
      
      <Suspense fallback={<div className="lazy">loading...</div>} >
        <Body />
      </Suspense>
      <FooterComponent />
    </div>
  );
}

export default App;
