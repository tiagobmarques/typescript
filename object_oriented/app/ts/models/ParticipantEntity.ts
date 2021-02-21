import { RegistrationType } from './../enums/registration-type.enum.js';
import { ContactEntity, IContactEntity } from "./ContactEntity.js";

interface IParticipantEntity extends IContactEntity {
    registrationCode: number;
    registrationType: RegistrationType;
    registrationNumber: String;
}

export class ParticipantEntity extends ContactEntity{

    public registrationCode: number;
    public registrationType: RegistrationType;
    public registrationNumber: String;
 
    constructor (data: IParticipantEntity) {
        super(data);
        this.registrationCode = data.registrationCode;
        this.registrationType = data.registrationType;
        this.registrationNumber = data.registrationNumber;
    }
}