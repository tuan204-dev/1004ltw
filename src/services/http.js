import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://svccd9-8080.csb.apps",
});

export default axiosInstance;
