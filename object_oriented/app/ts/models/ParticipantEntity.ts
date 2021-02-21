import { ContactEntity, IContactEntity } from "./ContactEntity.js";

interface IParticipantEntity extends IContactEntity {
    registrationCode: number;
    registrationType: String;
    registrationNumber: String;
}

export class ParticipantEntity extends ContactEntity{

    public registrationCode: number;
    public registrationType: String;
    public registrationNumber: String;
 
    constructor (data: IParticipantEntity) {
        super(data);
        this.registrationCode = data.registrationCode;
        this.registrationType = data.registrationType;
        this.registrationNumber = data.registrationNumber;
    }
}