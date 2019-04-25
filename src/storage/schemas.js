export const UserSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: {type: 'string', indexed: true},
        username: 'string',
        pass: 'string',
        token: 'string'
    }
};