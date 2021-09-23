export default {
  baseURL: "http://127.0.0.1:4444/",
  method: "GET",
  header: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
  params: {},
  timeout: 10000,
  withCredentials: false,
  responseType: "json",
  maxContentLength: 2000,
  validateStatus(status) {
    return status >= 200 && status < 500;
  },
  maxRedirects: 5,
  data: {}
}