import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";
const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

axiosConfig.defaults.headers.common.Accept = "application/json";
axiosConfig.defaults.headers.common["Content-Type"] = "application/json";

export { axiosConfig };
