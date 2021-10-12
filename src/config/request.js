import config from "./axios.config";
import axios from "axios";

const request = axios.create(config);


const requestErr = () => {

}

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.timeout = 50000 * 20
    }
    return config;
  }, requestErr,
);

request.getBaseURL = function () {
  return config.baseURL;
}

export default request;