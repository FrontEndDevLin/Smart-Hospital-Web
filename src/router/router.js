import Workplace from "../pages/workplace/Workplace";
import hospital from "./modules/hospital";
import error from "./modules/error";

import Login from "../pages/login/Login";

const routes = [
  {
    path: "/login",
    component: Login,
    exact: true
  },
  {
    path: "/",
    component: Workplace,
    modules: [
      hospital,
      error
    ],
    exact: false
  }
];

export default routes;