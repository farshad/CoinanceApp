// class UserModel {

// }
// UserModel.schema = {
//     name: 'user',
//     primaryKey: 'id',
//     properties: {
//         id: {type: 'int', indexed: true},
//         username: 'string',
//         pass: 'string',
//         token: 'string',
//         createdAt: 'date',
//         updatedAt: 'date'
//     }
// }
// export default UserModel;

export default class User {
    constructor(id, username, pass, token) {
      this.id = id;
      this.username = username;
      this.pass = pass;
      this.token = token;
    }
  }