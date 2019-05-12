import  axios from 'axios';
import { BASE_URL } from './urls';
import AuthService from '../services/AuthService';

export default class Request {
    constructor(navigation) {
        this.navigation = navigation;
        this.authService = new AuthService();
        this.instance = axios.create(this.getConfig());

        this.instance.interceptors.request.use(request => {
            return request
          })

        this.instance.interceptors.response.use(function (response) {
            return response.data;
        }, function (error) {
            return Promise.reject(error.response.data, error.response.status);
        });
    }

    getConfig = () => {
        let token = this.authService.getToken();
        token = token != null ? token : '';
        return {
            baseURL: BASE_URL,
            timeout: 3000,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
    }
    async get(url, params) {
        return this.instance.get(url, { params: params });
    }
    
    async post(url, data, params) {
        return this.instance.post(url, data, { params : params });
    }
    async upload(url, formData) {
        return this.instance.post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    }
};