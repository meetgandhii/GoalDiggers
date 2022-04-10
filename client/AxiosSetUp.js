import axios from 'axios';
// port 3001
export const baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 300000,
});