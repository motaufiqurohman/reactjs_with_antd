import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  render() {
    return (
      <Sider
        breakpoint="sm"
        onBreakpoint={broken => this.props.onResponsive(broken)}
        collapsedWidth={this.props.collapsedWidth}
        collapsible
        trigger={null}
        collapsed={this.props.collapsed}
        onCollapse={this.props.onCollapse}
        className={
          !this.props.collapsed && this.props.collapsedWidth == 0
            ? "sidebar-mobile"
            : ""
        }
      >
        <div className="logo"></div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <DashboardOutlined />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/map">
              <GlobalOutlined />
              <span>Map</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="3"
            title={
              <span>
                <UserOutlined />
                <span>News</span>
              </span>
            }
          >
            <Menu.Item key="3.1">World</Menu.Item>
            <Menu.Item key="3.2">National</Menu.Item>
            <Menu.Item key="3.3">Region</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
