import  axios from 'axios'
import { URL } from '../api/urls';
import UserRepository from '../storage/repositories/UserRepository';
import Request from '../api/Request';
import UserModel from '../storage/models/UserModel';

export default class AuthsService {
    constructor() {
        this.userRepository = new UserRepository();
        this.request = new Request();
    }

    getToken = () => {
        return userRepository.getToken();
    }
    refreshToken = () => {
        let token = null;
        let user = this.userRepository.getCurrent()
        if(user != null){
            const params = {
                username: user.username,
                password: user.pass
            };
            token = this.request.post(URL.USER_LOGIN, null, params);
            this.userRepository.deleteAll();
            this.userRepository.create(new UserModel('1', user.username, user.pass, token));
        }
        return token;
    }
}