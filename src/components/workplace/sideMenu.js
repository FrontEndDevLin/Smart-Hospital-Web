import React from "react";

import { Menu } from "antd";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const { SubMenu } = Menu;

import SubPageRouter from "./subPageRouter";


let _fn = {
  loadMenu() {
    let jsxHtml = [];
    for (let oSideMenu of this.state.oAySideMenu) {
      let subJsxHtml = [];
      for (let oMenu of oSideMenu.children) {
        subJsxHtml.push(<Menu.Item key={ oMenu.key }>
          <Link to={ oMenu.path }>
            { oMenu.title }
          </Link>
        </Menu.Item>);
      }

      jsxHtml.push(
        <SubMenu title={ oSideMenu.title } key={ oSideMenu.key }>
          { subJsxHtml }
        </SubMenu>
      );
    }
    return jsxHtml;
  }
}

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oAySideMenu: []
    }
  }

  render() {
    return <div style={{ height: '100%' }}>
      <SubPageRouter 
        onRouterLoaded={ this.initRouterData }
        onRouterChange={ this.test }
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1-1']}
        defaultOpenKeys={['1']}
        style={{ height: '100%' }}
      >
        { _fn.loadMenu.call(this) }
      </Menu>
    </div>
  }

  test(pathname) {
    console.log(pathname)
  }

  initRouterData = (routerMap) => {
    let oAySideMenu = JSON.parse(JSON.stringify(routerMap));
    let sModuleKey = "sideModule_",
      sMenuKey = "sideMenu_";
    let idx1 = 0, 
      idx2 = 0;
    for (let oSideMenu of oAySideMenu) {
      oSideMenu.key = sModuleKey + idx1;
      idx1++;
      for (let oMenu of oSideMenu.children) {
        oMenu.key = sMenuKey + idx2;
        idx2++;
      }
    }

    this.setState({
      oAySideMenu: oAySideMenu
    })
  }
}

export default SideMenu;