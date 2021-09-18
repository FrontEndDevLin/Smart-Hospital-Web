import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import { Layout, Menu, Dropdown } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

import { WorkplaceRouter, sideMenus } from "../../router/index";

import "../../layout/workplace/workplace.less";
import BreadcrumbNav from "./BreadcrumbNav";

import logo from "../../static/image/logo.png";

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
    const userMenu = (
      <Menu>
        <Menu.Item key={"logout"}>
          <div onClick={this.logout}>退出登录</div>
        </Menu.Item>
      </Menu>
    );

    return (
      <BrowserRouter>
        <Layout className="workplace">
          <Header className="header">
            <div className="logo">
              <img src={logo} />
              <div className="sys-title">
                <span className="sys-title-cn">倍康益众互联网智慧医院管理后台</span>
                <span className="sys-title-en">Beikang Yizhong Internet smart hospital management background</span>
              </div>
            </div>
            <Dropdown overlay={userMenu}>
              <div className="user-menu">
                <ClockCircleOutlined /> 
                <span className="welcome">你好啊，死靓仔</span>
              </div>
            </Dropdown>
          </Header>
          <Layout>
            <Sider width="240" className="sider">
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
              <Content className="content">
                <BreadcrumbNav />
                <div className="workplace-role">
                  <WorkplaceRouter />
                </div>
              </Content>
              <Footer className="copyright">
                Copyright 2021 广东倍康益众信息技术有限公司
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    console.log("架构完善了");
  }

  logout = () => {
    // do sth
    this.props.history.push({
      pathname: "/login"
    })
  }
}

export default Workplace;