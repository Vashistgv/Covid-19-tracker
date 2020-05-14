import React , {Suspense, lazy} from 'react';

import NavBar from './component/NavBar/Nav'
import CFooter from './Footer'
import 'antd/dist/antd.css';


const Body = lazy(() => import('./Body'));

function App() {
  return (
    <div className="App">

      <NavBar/>
      
      <Suspense fallback={<div className="lazy">loading...</div>} >
        <Body />
      </Suspense>
      <CFooter />
    </div>
  );
}

export default App;
