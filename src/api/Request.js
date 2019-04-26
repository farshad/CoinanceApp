import  axios from 'axios'
import { BASE_URL } from './urls'

export default class Request {
    constructor() {
        this.instance = axios.create(this.getConfig());

        this.instance.interceptors.request.use(request => {
            console.log('Starting Request', request)
            return request
          })

        this.instance.interceptors.response.use(function (response) {
            return response.data
        }, function (error) {
            return Promise.reject(error.response.data);
        });
    }

    getConfig = () => {
        let _token = "";
        return {
            baseURL: BASE_URL,
            timeout: 3000,
            headers: {
                'Authorization': `Bearer ${_token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
    }
    async get(url, params) {
        return await this.instance.get(url, { params: params });
    }
    
    async post(url, data, params) {
        return this.instance.post(url, data, { params : params });
    }
};