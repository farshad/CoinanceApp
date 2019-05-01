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
    async verify(mobileNumber, verificationCode) {
        const params = {
            mobileNumber: mobileNumber,
            verificationCode: verificationCode
        };
        return this.request.post(URL.REGISTER.VERIFY, null, params);
    }
}