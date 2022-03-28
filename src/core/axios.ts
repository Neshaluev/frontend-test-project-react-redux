import axios, {AxiosRequestConfig} from 'axios';

import {localStorage} from '../utils/localStorage';

axios.interceptors.request.use((config: any) => {
    config.headers.common.Authorization = localStorage.getItem('token');
    config.baseURL = 'http://localhost:4000/';
    return config;
});

export default axios;
