import axios from 'axios';

const axiosConfig = axios.create();

// baseURL: 'http://192.168.0.109',
axiosConfig.defaults.baseURL = 'http://localhost:3001';

export default axiosConfig;
