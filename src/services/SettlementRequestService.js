import Request from '../api/Request';
import { URL } from '../api/urls';

export default class SettlementRequestService {
    constructor(){
        this.request = new Request();
    }
    async save(form) {
        return this.request.post(URL.Settlement_Request.SAVE, null, form);
    }
}