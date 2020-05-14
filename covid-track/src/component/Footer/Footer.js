import React, { Component } from 'react';
import {Layout} from 'antd';
import './Footer.css'
const {Footer} = Layout;

class FooterComponent extends React.Component {

    render() {
        return(
            <Layout>
                <Footer className="Footer" style={{textAlign: 'center', background: "black", color:'white'}}>Footer components here </Footer>
            </Layout>
        )
    }
}

export default FooterComponent