import React, { Component } from "react";
import { Breadcrumb } from "antd";

class Map extends Component {
  render() {
    return (
      <>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Map</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          Map
        </div>
      </>
    );
  }
}

export default Map;
