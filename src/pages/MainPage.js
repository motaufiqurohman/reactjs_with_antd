import React from "react";
import { Layout } from "antd";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";
import Dashboard from "./../components/mainpage/content/Dashboard";
import Map from "./../components/mainpage/content/Map";

const { Content } = Layout;

class MainPage extends React.Component {
  state = {
    collapsed: false,
    collapsedWidth: 0
  };

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  onResponsive = isBreak => {
    this.setState({
      collapsedWidth: isBreak ? 0 : 80
    });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar
          collapsedWidth={this.state.collapsedWidth}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          onResponsive={this.onResponsive}
        />
        {!this.state.collapsed && this.state.collapsedWidth === 0 && (
          <div
            style={{
              height: "100%",
              width: "100%",
              background: "rgba(0,0,0,0.7)",
              position: "absolute",
              zIndex: 1
            }}
            onClick={this.onCollapse}
          />
        )}
        <Layout className="site-layout">
          <Navbar
            onCollapse={this.onCollapse}
            collapsed={this.state.collapsed}
          />
          <Content style={{ margin: "0 16px" }}>
            <Switch>
              <Route path="/map" component={Map} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;
