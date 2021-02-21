export class InvoiceEntity {
    constructor(data) {
        this.id = data.id;
        this.participant = data.participant;
        this.installmentDate = data.installmentDate;
        this.document = data.document;
        this.value = data.value;
    }
}
