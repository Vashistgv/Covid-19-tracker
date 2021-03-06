import React, { Suspense, lazy } from "react";
import { Layout } from "antd";
import NavBar from "./component/NavBar/Nav";
import FooterComponent from "./component/Footer/Footer";
import "antd/dist/antd.css";
import Images from './component/backgroundimage/images'
import history from './component/Router/History'

const { Header, Content, Sider } = Layout;
const Body = lazy(() => import("./Body"));



class App extends React.Component {

    state = {
          displayTable : false   
    }

    trackerBtn = () => {
      this.setState({displayTable : !this.state.displayTable})
      history.push('/')

      }

      backBtn = () => {
        this.setState({displayTable : !this.state.displayTable})
        history.push('/Tracker')
      }
  render() {
    
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
  
          <NavBar />
        </Header>
        <Layout style={{ marginTop: 64 }}>
          <Content
            className="site-layout-background"
            style={{
              // padding: 24, for table
              margin: 0,
            }}
          >
            <Suspense fallback={<div className="lazy">loading...</div>}>
              { this.state.displayTable ?  <Body onClick={this.trackerBtn} /> :
              <Images onClick={this.backBtn} />
              }
              
            </Suspense>
          </Content>
        </Layout>
  
        <FooterComponent />
      </Layout>
    );

  }
  
}

export default App;
