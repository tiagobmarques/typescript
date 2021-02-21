import { ContactEntity } from "./ContactEntity.js";
export class UserEntity extends ContactEntity {
    constructor(data) {
        super(data);
        this.login = data.login;
        this.password = data.password;
    }
}
