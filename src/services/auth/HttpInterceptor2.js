import axios from "axios";

const instanceBaseurl2 = axios.create({
  baseURL: process.env.REACT_APP_API_URL2,
});

// const instanceBaseurl1 = axios;

export default instanceBaseurl2;
