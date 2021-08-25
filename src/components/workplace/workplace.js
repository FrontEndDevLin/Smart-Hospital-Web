import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

import { WorkplaceRouter, sideMenus } from "../../router/index";

import "../../layout/basic.less";

import BreadcurmbNav from "./breadcurmbNav"

let _fn = {
  getSideMenuOpenKey(pathname) {
    let defaultOpenKeys = [],
      defaultSelectedKeys = [];

    for (let oSideMenu of sideMenus) {
      for (let oMenu of oSideMenu.children) {
        if (oMenu.path == pathname || pathname == "/") {
          defaultOpenKeys = [oSideMenu.key];
          defaultSelectedKeys = [oMenu.key];
          break;
        }
      }
    }

    return { defaultOpenKeys, defaultSelectedKeys };
  },

  loadMenu() {
    let jsxHtml = [];
    for (let oSideMenu of sideMenus) {
      let subJsxHtml = [];
      for (let oMenu of oSideMenu.children) {
        subJsxHtml.push(<Menu.Item key={oMenu.key}>
          <Link to={oMenu.path}>
            {oMenu.title}
          </Link>
        </Menu.Item>);
      }

      jsxHtml.push(
        <SubMenu title={oSideMenu.title} key={oSideMenu.key}>
          {subJsxHtml}
        </SubMenu>
      );
    }
    return jsxHtml;
  },

  loadPage() {

  }
}

class Workplace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ..._fn.getSideMenuOpenKey.call(this, props.location.pathname)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Layout className="container">
          <Header style={{ color: "#fff" }}>
            Header
          </Header>
          <Layout>
            <Sider style={{ color: "#fff" }}>
              <Menu
                mode="inline"
                defaultOpenKeys={this.state.defaultOpenKeys}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                style={{ height: '100%' }}
              >
                {_fn.loadMenu.call(this)}
              </Menu>
            </Sider>
            <Layout>
              <Content>
                <BreadcurmbNav />
                <WorkplaceRouter />
              </Content>
              <Footer style={{ background: "#333", color: "#fff" }}>Footer</Footer>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    console.log("架构完善了");
  }
}

export default Workplace;