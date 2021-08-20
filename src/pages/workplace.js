import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from "antd";
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

import Data from "./data";

import "../layout/basic.less";

let _fn = {
  loadMenu() {
    let jsxHtml = [];
    for (let menu of this.state.oAySideMenu) {
      let subJsxHtml = [];
      for (let subMenu of menu.children) {
        subJsxHtml.push(<Menu.Item key={ subMenu.key }>
          <Link to={ subMenu.path }>
            { subMenu.title }
          </Link>
        </Menu.Item>)
      }

      jsxHtml.push(
        <SubMenu title={ menu.title } key={ menu.key }>
          { subJsxHtml }
        </SubMenu>
      )
    }
    return jsxHtml;
  }
}

class Workplace extends React.Component {
  constructor() {
    super();
    this.state = {
      oAySideMenu: [
        {
          title: "首页",
          key: "1",
          children: [
            {
              title: "数据总览",
              path: "/workplace",
              key: "1-1"
            }
          ]
        },
        {
          title: "医院模块",
          key: "2",
          children: [
            {
              title: "院区管理",
              key: "2-1",
              path: "/workplace/data"
            },
            {
              title: "科室管理",
              key: "2-2",
              path: "/workplace"
            },
            {
              title: "医生管理",
              key: "2-3",
              path: "/workplace"
            },
            {
              title: "排版管理",
              key: "2-4",
              path: "/workplace"
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Layout className="container">
          <Header style={{ color: "#fff" }}>Header</Header>
          <Layout>
            <Sider style={{ color: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1-1']}
                defaultOpenKeys={['1']}
                style={{ height: '100%' }}
              >
                { _fn.loadMenu.call(this) }
              </Menu>
            </Sider>
            <Layout>
              <Content>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                Content
                <Switch>
                  <Route exact path="/workplace/data" component={ Data }/>
                </Switch>
              </Content>
              <Footer style={{ background: "#333", color: "#fff" }}>Footer</Footer>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Workplace;