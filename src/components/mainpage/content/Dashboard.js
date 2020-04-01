import React, { Component } from "react";
import { Breadcrumb } from "antd";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          Dashboard
        </div>
      </>
    );
  }
}

export default Dashboard;
