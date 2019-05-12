import Request from '../api/Request';
import { URL } from '../api/urls';

export default class DocumentService {
    constructor(){
        this.request = new Request();
    }
    async upload(form) {
        return this.request.upload(URL.DOCUMENT.UPLOAD, form);
    }
    async get() {
        return this.request.get(URL.DOCUMENT.GET);
    }
}