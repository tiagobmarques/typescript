import { ContactEntity, IContactEntity } from "./ContactEntity.js";

interface IUserEntity extends IContactEntity {
    login: String;
    password: String;
}

export class UserEntity extends ContactEntity{
    public login: String;
    public password: String;

    constructor (data: IUserEntity) {
        super(data);
        this.login = data.login;
        this.password = data.password;
    }
}