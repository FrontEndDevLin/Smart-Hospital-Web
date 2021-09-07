import React from "react";
import "../../layout/login/login.less";

import { Input, InputNumber, Button } from "antd";

import logo from "../../static/image/logo.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="login clearfix">
      <div className="container">
        <div className="login-header">
          <div className="logo">
            <img src={logo}/>
          </div>
          <div className="title">
            倍康益众-互联网护理管理后台
          </div>
        </div>
        <div className="form">
          <div className="form-item">
            <Input placeholder="请输入登录账号"/>
          </div>
          <div className="form-item">
            <Input type="password" placeholder="请输入登录密码"/>
          </div>
          <div className="form-item">
            <Input placeholder="请输入6位短信验证码"/>
          </div>
        </div>
        <div className="footer">
          <Button onClick={this.login}>登录</Button>
        </div>
      </div>
    </div>
  }

  login = () => {
    this.props.history.push("/")
  }
}

export default Login;