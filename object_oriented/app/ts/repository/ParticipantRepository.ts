import { ParticipantEntity } from "../models/ParticipantEntity.js";
import { Repository } from "./Repository.js";

export class ParticipantRepository extends Repository<ParticipantEntity>{

    addObjectList(){
        const newParticipant1 = new ParticipantEntity(1, "Tiago", 181365, "CPF", "06606787998");
        const newParticipant2 = new ParticipantEntity(2, "Samira", 6665444, "CPF", "07565465445");
        const newParticipant3 = new ParticipantEntity(3, "Valentina", 123155, "CPF", "98065445677");
        const newParticipant4 = new ParticipantEntity(4, "Nicolas", 99954456, "CPF", "32045645677");

        this._objectList.push(newParticipant1, newParticipant2, newParticipant3, newParticipant4);
    }
    
    findById(id: number) {
        // TO-DO
        return this._objectList.find(element => element.id == id)
    }

    update(id: number, entity: ParticipantEntity) {
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