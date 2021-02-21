import { ParticipantEntity } from './ParticipantEntity';

interface IInvoiceEntity {
    id: number;
    participant: ParticipantEntity;
    installmentDate: Date;
    document: String;
    value: number;
}

export class InvoiceEntity {

    public  id: number;
    public  participant: ParticipantEntity;
    public  installmentDate: Date;
    public  document: String;
    public  value: number;

    constructor(data: IInvoiceEntity) {
        this.id = data.id;
        this.participant = data.participant;
        this.installmentDate = data.installmentDate;
        this.document = data.document;
        this.value = data.value;
    }
}