import Request from '../api/Request';
import { URL } from '../api/urls';

export default class UserService {
    constructor(){
        this.request = new Request();
    }
    async getCurrent() {
        return this.request.get(URL.USER.CURRENT, null);
    }
    async update(params) {
        return this.request.post(URL.USER.UPDATE, null, params);
    }
    async changePassword(data) {
        return this.request.post(URL.USER.CHANGE_PASSWORD, data, null);
    }
}