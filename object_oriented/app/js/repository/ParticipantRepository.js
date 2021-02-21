import { RegistrationType } from './../enums/registration-type.enum.js';
import { ParticipantEntity } from "../models/ParticipantEntity.js";
import { Repository } from "./Repository.js";
export class ParticipantRepository extends Repository {
    addObjectList() {
        const newParticipant1 = new ParticipantEntity({ id: 1, name: "Tiago", registrationCode: 181365, registrationType: RegistrationType.CPF, registrationNumber: "06606787998" });
        const newParticipant2 = new ParticipantEntity({ id: 2, name: "Samira", registrationCode: 6665444, registrationType: RegistrationType.CPF, registrationNumber: "07565465445" });
        const newParticipant3 = new ParticipantEntity({ id: 3, name: "Valentina", registrationCode: 123155, registrationType: RegistrationType.CPF, registrationNumber: "98065445677" });
        const newParticipant4 = new ParticipantEntity({ id: 4, name: "Nicolas", registrationCode: 99954456, registrationType: RegistrationType.CPF, registrationNumber: "32045645677" });
        this._objectList.push(newParticipant1, newParticipant2, newParticipant3, newParticipant4);
    }
}
