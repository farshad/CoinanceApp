import { BASE_URL,URL } from '../api/urls';
import UserRepository from '../storage/repositories/UserRepository';
import  axios from 'axios';

export default class AuthsService {
    constructor() {
        this.userRepository = new UserRepository();
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
            axios.post(BASE_URL + URL.USER.LOGIN, null, { params: params })
            .then((res) => {
                token = res.data;
            })
            .then(() => {
                this.userRepository.update({id: '1', token: token});
            })
            .catch((err) => {
                console.warn(err);
            });
        }
    }
}