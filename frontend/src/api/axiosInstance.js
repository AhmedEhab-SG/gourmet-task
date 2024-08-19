import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  headers: config.headers,
});

export default axiosInstance;
