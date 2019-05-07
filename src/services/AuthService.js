import { BASE_URL,URL } from '../api/urls';
import UserRepository from '../storage/repositories/UserRepository';
import  axios from 'axios';
import UserModel from '../storage/models/UserModel';

export default class AuthsService {
    constructor() {
        this.userRepository = new UserRepository();
        this.request = new Request();
    }
    getToken = () => {
        return this.userRepository.getToken();
    }
    refreshToken = () => {
        let token = null;
        let user = this.userRepository.getCurrent();
        if(user != null){
            const params = {
                username: user.username,
                password: user.pass
            };
            token = axios.post(BASE_URL + URL.USER.LOGIN, null, { params: params }).then(function (res) {
                this.userRepository.deleteAll().then(() => {
                    this.userRepository.create(new UserModel('1', params.username, params.password, res));
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        return token;
    }
}