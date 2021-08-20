import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Workplace from "./pages/workplace";
import Login from "./pages/login";

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={ Workplace }></Route>
    <Route path="/workplace" component={ Workplace }></Route>
    <Route exact path="/login" component={ Login }></Route>
  </BrowserRouter>
);

export default Router;