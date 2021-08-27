import config from "./axios.config";
import axios from "axios";

const request = axios.create(config);


const requestErr = () => {

}

// http request 拦截器
request.interceptors.request.use(
  (config) => {
    const token = "token";
    if (token) {
      config.headers.Authorization = token;
      config.timeout = 50000 * 20
    }
    return config;
  }, requestErr,
);

export default request;