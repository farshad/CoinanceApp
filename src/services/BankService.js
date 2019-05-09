import Request from '../api/Request';
import { URL } from '../api/urls';

export default class BankService {
    constructor(){
        this.request = new Request();
    }
    async fetchAll() {
        return this.request.get(URL.BANK.FETCH_ALL, null);
    }
}