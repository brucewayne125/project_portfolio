import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL if it's different

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;