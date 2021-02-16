export class ContactEntity {

    private _id: number;
    private _name: String;

    constructor (id: number, name: String) {
        this._id = id,
        this._name = name;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}