import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 300000,
});

api.interceptors.request.use(
  (config) => {
    console.log(
      `➡ ${config.method?.toUpperCase()} ${config.url}`
    );
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error);
    return Promise.reject(error);
  }
);

export default api;