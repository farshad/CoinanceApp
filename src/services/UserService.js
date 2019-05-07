import Request from '../api/Request';
import { URL } from '../api/urls';

export default class UserService {
    constructor(){
        this.request = new Request();
    }
    async getCurrent() {
        return this.request.get(URL.USER.CURRENT, null);
    }
}