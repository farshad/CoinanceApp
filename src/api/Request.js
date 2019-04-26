import  axios from 'axios'
import BASE_URL from './urls'

let instance;
export default class Request {
    constructor() {
        instance = axios.create(this.getConfig());

        instance.interceptors.response.use(function (response) {
            return response.data
        }, function (error) {
            return Promise.reject(error);
        });
    }

    getConfig = () => {
        let _token = "";
        return {
            baseURL: `${BASE_URL}`,
            timeout: 3000,
            headers: {'Authorization': `Bearer ${_token}`, 'Accept': 'application/json'}
        };
    }
    send = (params, cb) => {
        let url;
        let parameters;

        if (params.method == 'GET') {
            url = params.url;
            get(url, cb);
        } else if (params.method == 'POST') {
            url = params.url;
            parameters = params.obj;
            post(url, parameters, cb);
        }
    }
};

async function get(url, cb) {
    try {
        let response = await instance.get(url);
        return  cb(null, response);
    } catch (error){
        cb(error);
    }
}

async function post(url, params, cb) {
    try {
        let response = await instance.post(url, params);
        return cb(null, response);
    } catch (error) {
        cb(error);
    }
}