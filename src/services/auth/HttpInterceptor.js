import axios from "axios";
// import { toast } from "react-toastify";
// import { BASE_URL } from "./baseurl";

axios.interceptors.request.use(
  function (config) {
    if (config) {
      config.url = process.env.REACT_APP_API_URL + config.url;
      // config.withCredentials = true;
      return config;
    } else {
      const token = localStorage.getItem("accessToken");
      config.url = process.env.REACT_APP_API_URL + config.url;
      // console.log("89", config?.url);

      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      };
      config.withCredentials = true;
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // toast.error("Logout user!!");
    }
    return Promise.reject(error);
  }
);

const instanceBaseurl = axios;

export default instanceBaseurl;
