import axios from "axios";
const BASE_URL = "http://localhost:1337/api";
const axiosConfig = axios.create({
  baseURL: BASE_URL,
});
axiosConfig.defaults.headers.common["Content-Type"] = "application/json";
axiosConfig.defaults.headers.common.Accept = "application/json";
export { axiosConfig };
