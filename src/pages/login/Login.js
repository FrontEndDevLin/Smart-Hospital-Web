import React from "react";
import "../../layout/login/login.less";

import { Input, InputNumber } from "antd";

import logo from "../../static/image/logo.png";

class Login extends React.Component {
  render() {
    return <div className="login">
      <div className="container">
        <div>
          <img src={logo}/>
        </div>
        <div>
          <Input placeholder="请输入登录账号"/>
          <Input type="password" placeholder="请输入登录密码"/>
          <Input placeholder="请输入6位短信验证码"/>
        </div>
      </div>
    </div>
  }
}

export default Login;