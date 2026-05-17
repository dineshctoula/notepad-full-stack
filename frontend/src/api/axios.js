import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
//   it runs before every request is sent 
//  token payera broswse ko memory ma store hunxa 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;