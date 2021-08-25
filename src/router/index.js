import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./router";

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map((route, i) => {
            return <Route exact={route.exact} key={i} path={route.path} component={route.component}></Route>
          })
        }
      </Switch>
    </BrowserRouter>
  );
};

const WorkplaceRouter = () => {
  let oAyRouteInstance = [];

  let bIsInitFirstRoute = false;
  for (let i = 0; i < routes[1].modules.length; i++) {
    let module = routes[1].modules[i];
    for (let j = 0; j < module.children.length; j++) {
      let route = module.children[j];
      if (!bIsInitFirstRoute) {
        oAyRouteInstance.push(
          <Route exact key={`${i}-${j}-default`} path="/">
            <Redirect to={route.path}/>
          </Route>
        );
        bIsInitFirstRoute = true;
      }
      oAyRouteInstance.push(
        <Route exact key={`${i}-${j}`} path={route.path} component={route.component} />
      )
    }
  }

  oAyRouteInstance.push(
    <Route key="error-404" exact path="*">
      <Redirect to="/404"/>
    </Route>
  );

  return (
    <Switch>
      { oAyRouteInstance }
    </Switch>
  );
};

let sideMenus = [];
for (let i = 0; i < routes[1].modules.length; i++) {
  let module = routes[1].modules[i];
  let sideModules = [];
  if (module.ignore) {
    continue;
  }
  for (let j = 0; j < module.children.length; j++) {
    let route = module.children[j];
    if (route.title) {
      sideModules.push({
        title: route.title,
        path: route.path,
        key: `sideMenu_${i}-${j}`
      });
    }
  }

  sideMenus.push({
    title: module.title,
    key: `sideModule_${i}`,
    children: sideModules
  })
}

export { BaseRouter, WorkplaceRouter, sideMenus };