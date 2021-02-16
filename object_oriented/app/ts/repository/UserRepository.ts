import { UserEntity } from "../models/UserEntity.js";
import { Repository } from "./Repository.js";

export class UserRepository extends Repository<UserEntity>{

    addObjectList(){
        const newUser1 = new UserEntity(1, "Tiago", "tiagobm", "10121990");
        const newUser2 = new UserEntity(2, "Samira", "samiramar", "09081989");

        this._objectList.push(newUser1, newUser2);
    }

    findById(id: number) {
        // TO-DO
        return this._objectList.find(element => element.id == id)
    }

    update(id: number, entity: UserEntity) {
        // TO-DO
        const index = this.findAll().map(e => e.id).indexOf(id);

        if (index > -1) {
            this._objectList[index] = entity;
        }
    }

    delete(id: number) {
        // TO-DO
        const element = this.findById(id);
        const index = this.findAll().indexOf(element);

        if (index > -1) {
            this._objectList.splice(index, 1);
        }
    }
}