import React, { Component } from 'react';
import {Layout} from 'antd';
import './Footer.scss'
const {Footer} = Layout;

class FooterComponent extends React.Component {

    render() {
        return(
            <Layout>
                <Footer className="Footer" style={{textAlign: 'center', background: "black", color:'white'}}>Covid ©2020 Created by VA </Footer>
            </Layout>
        )
    }
}

export default FooterComponent