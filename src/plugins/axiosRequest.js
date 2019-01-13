import axios from "axios";
import { getToken, setToken } from "@/util/auth";

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: process.env.BASE_API,
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    let token = getToken();
    if (token) {
      config.headers["access-token"] = token["access-token"];
      config.headers["uid"] = token["uid"];
      config.headers["client"] = token["client"];
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const header = response.headers;
    if (header["access-token"]) {
      let token = {
        "access-token": header["access-token"],
        expiry: header["expiry"],
        "token-type": header["token-type"],
        uid: header["uid"],
        client: header["client"]
      };
      setToken(token);
    }
    return response.data;
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
