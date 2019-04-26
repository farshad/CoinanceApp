import Request from '../api/Request';
import { URL } from '../api/urls';

export default class RegisterService {
    constructor(){
        this.request = new Request();
    }
    async getVerficationCode(mobileNumber) {
        const params = {
            mobileNumber:  mobileNumber 
        };
        return this.request.post(URL.REGISTER.GET_VERIFICATION_CODE, null, params);
    }
}