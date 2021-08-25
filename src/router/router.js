import Workplace from "../components/workplace/workplace";
import hospital from "./modules/hospital";
import error from "./modules/error";

import Login from "../pages/login/login";

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