import Request from '../api/Request';
import { URL } from '../api/urls';

export default class BankAccountService {
    constructor(){
        this.request = new Request();
    }
    async get() {
        return this.request.get(URL.BANK_ACCOUNT.GET, null);
    }
    async save(form) {
        return this.request.post(URL.BANK_ACCOUNT.SAVE, form, null);
    }
}