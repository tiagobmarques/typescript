import { ContactEntity } from "./ContactEntity.js";

export class UserEntity extends ContactEntity{
    private _login: String;
    private _password: String;

    constructor (id: number, name: string, login: string, password: string) {
        super(id, name);
        this._login = login;
        this._password = password;
    }

    get login () {
        return this._login;
    }

    set login (login) {
        this._login = login;
    }

    get password () {
        return this._password;
    }

    set password (password) {
        this._password = password;
    }
}