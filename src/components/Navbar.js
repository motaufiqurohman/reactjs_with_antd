import React from "react";
import { Layout, Row, Col, Button, Tooltip } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

class Navbar extends React.Component {
  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Row>
          <Col span={12}>
            <div className="w-100 h-100 left-navbar">
              {this.props.collapsed ? (
                <MenuUnfoldOutlined
                  className="trigger"
                  onClick={this.props.onCollapse}
                />
              ) : (
                <MenuFoldOutlined
                  className="trigger"
                  onClick={this.props.onCollapse}
                />
              )}
            </div>
          </Col>
          <Col span={12}>
            <div className="w-100 h-100 right-navbar">
              <Tooltip title="search">
                <Link to="/login">
                  <Button
                    className="d-flex justify-content-center align-items-center"
                    type="default"
                    shape="circle"
                    icon={<LogoutOutlined />}
                  />
                </Link>
              </Tooltip>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default Navbar;
