import config from "./axios.config";
import axios from "axios";

const request = axios.create(config);


const requestErr = () => {

}

// http request 拦截器
request.interceptors.request.use(
  (config) => {
    // const token = Vue.ls.get(ACCESS_TOKEN);
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.timeout = 50000 * 20
    }
    return config;
  }, requestErr,
);

export default request;