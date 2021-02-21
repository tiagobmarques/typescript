import { ContactEntity } from "./ContactEntity.js";
export class ParticipantEntity extends ContactEntity {
    constructor(data) {
        super(data);
        this.registrationCode = data.registrationCode;
        this.registrationType = data.registrationType;
        this.registrationNumber = data.registrationNumber;
    }
}
