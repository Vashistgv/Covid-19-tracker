import React , {Suspense, lazy} from 'react';
import {Layout} from 'antd';
import NavBar from './component/NavBar/Nav';
import FooterComponent from './component/Footer/Footer'
import 'antd/dist/antd.css';
import TestBody from './TestBody'

const { Header, Content, Sider } = Layout;
const Body = lazy(() => import('./Body'));

function App() {
  return (
    <Layout>
    <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />

      <NavBar/>
      </Header>


      <Layout style={{ padding: '0 50px', marginTop: 64 }}>
      
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
           
          }}
        >
         <Suspense fallback={<div className="lazy">loading...</div>} >
        <Body />
       <TestBody/> 
      </Suspense>
        </Content>
      </Layout>
      
      <FooterComponent />
      </Layout>
  );
}

export default App;
