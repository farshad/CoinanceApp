import Realm from 'realm'

export default class BaseRepository {
    constructor(schema, keyVal) {
        this._realm = new Realm({schema: [schema]});
        this._schema = schema;
        this._key = keyVal;
    }

    findAll = function() {
        try {
            let items = this._realm.objects(this._schema.name);
            return items;
        } catch (error) {
            return error;
        }
    }

    findByKey = function(keyVal) {
        try {
            let items = this._realm.objects(this._schema.name).filtered(this._key + ' == "' + keyVal + '"');
            return null, items.length > 0 ? items[0] : null;
        } catch (error) {
            return error;
        }
    }

    create = function(data) {
        try {
            this._realm.write(() => {
                this._realm.create(this._schema.name, data);
            });

            return data;
        } catch (error) {
            alert(error.message);
            return data;
        }
    }

    createList = function(dataList, cb) {
        try {
            this._realm.write(() => {
                for(let i = 0; i < dataList.length; i++) {
                    let data = dataList[i];

                    this._realm.create(this._schema.name, data);
                }
            });

            return dataList;
        } catch (error) {
            return error;
        }
    }

    update = function(data) {
        try {
            this._realm.write(() => {
                this._realm.create(this._schema.name, data, true);
            });

            return data;
        } catch (error) {
            alert(error.message);
            return data;
        }
    }

    deleteByKey = function(keyVal, cb) {
        try {
            let items = this._realm.objects(this._schema.name).filtered(this._key + ' == "' + keyVal + '"');
            item = items[0];

            if(item) {
                this._realm.write(() => {
                    this._realm.delete(item);
                });
            }

            return null;
        } catch (error) {
            return error;
        }
    }

    deleteAll = function() {
        try {
            let items = this._realm.objects(this._schema.name);

            if(items.length > 0) {
                this._realm.write(() => {
                    this._realm.delete(items);
                });
            }

            return cb(null);
        } catch (error) {
            return error;
        }
    }
}