import React from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
import { sideMenus } from "../../router/index";

class BreadcurmbNav extends React.Component {
  render() {
    const { location } = this.props;

    let sModuleName = "未知",
      sMenuName = "未知";
    for (let oModule of sideMenus) {
      for (let oMenu of oModule.children) {
        if (oMenu.path == location.pathname) {
          sModuleName = oModule.title;
          sMenuName = oMenu.title;
          break;
        }
      }
    }

    return <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{ sModuleName }</Breadcrumb.Item>
      <Breadcrumb.Item>{ sMenuName }</Breadcrumb.Item>
    </Breadcrumb>
  }
}

export default withRouter(BreadcurmbNav);