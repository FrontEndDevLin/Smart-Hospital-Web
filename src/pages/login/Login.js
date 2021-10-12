import React from "react";
import "../../layout/login/login.less";

import { Input, InputNumber, Button } from "antd";

import logo from "../../static/image/logo.png";

import request from "../../config/request";
import JSEncrypt from "jsencrypt";
let encrypt = new JSEncrypt();
encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAthNGT25xakZW1mv89d4J
s0acBPBIgwl+7KViCM/aAgIUDqG9zhjG54PUdM1TMK+MHFyKzsi27/i42Xr0PiZm
FU+UbxUU71NFC2+0lJZYXVstx0LndMhfvrSresiqjvNB+wKaA2FjSmVIQwLNn/+V
Dbw5Y/q1/sFMrYs/509Sh3wykokqSTN8V+Ty5wwR+fjc+P8COttdJZR2AiiRLQ4v
3ZhtIUV8eSnEgJFlb3iuRRwD9bq9l9Qp0Jav8ndMugMql1u5yZLBNRBmzBGthApM
c9KpvBdarZJYHtyiI7toEV0EWWSz80cfkOe+jqWPaBtdIDMh/FaV4kE+qa1x5z1w
SwIDAQAB
-----END PUBLIC KEY-----`);

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
    let name = "obital",
      pwd = encrypt.encrypt("123abc");
    request.post("/user/login", {
      name, pwd
    }).then(res => {
      let data = res.data;
      if (data.code == 1) {
        let token = data.result.token;
        localStorage.setItem("token", token);
        this.props.history.push("/");
      }
    })
  }
}

export default Login;