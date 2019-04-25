import { UserSchema } from '../schemas'
import BaseRepository from './BaseRepository'

export default class UserRepository extends BaseRepository {
    constructor() {
        super(UserSchema, 'id')
    }

    getToken = function() {
        try {
            let token = null;
            let items = this.findAll();
            
            if(items.length != 0){
                token = items[0].token;
            }
            return token;
        } catch (error) {
            return error;
        }
    }
}