import React from "react";
import { Drawer, Button, Menu, Layout } from "antd";
import "./Nav.scss";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuOutlined,
} from "@ant-design/icons";

class SideDrawer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button icon={<MenuOutlined />} onClick={this.showDrawer}></Button>
        <Drawer
          title="CORONA"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Layout>
            <Menu theme="dark">
              <Menu.Item key="1" icon={<UserOutlined />}>
                Some
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Layout>
        </Drawer>
      </>
    );
  }
}

export default SideDrawer;
