import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const apiClient = axios.create({
  baseURL: "https://api.weswop.org",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
