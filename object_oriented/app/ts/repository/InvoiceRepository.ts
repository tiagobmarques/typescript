import { InvoiceEntity } from "../models/InvoiceEntity.js";
import { ParticipantRepository } from "./ParticipantRepository.js";
import { Repository } from "./Repository.js";

export class InvoiceRepository extends Repository<InvoiceEntity>{

    addObjectList(){
        const participantRepository = new ParticipantRepository();

        const newInvoice1 = new InvoiceEntity(1, participantRepository.findById(3), new Date('2020-01-01'), '500', 600);
        const newInvoice2 = new InvoiceEntity(2, participantRepository.findById(4), new Date('2020-02-01'), '600', 250);
        const newInvoice3 = new InvoiceEntity(3, participantRepository.findById(1), new Date('2020-03-01'), '700', 1500);

        this._objectList.push(newInvoice1, newInvoice2, newInvoice3);
    }

    
    findById(id: number) {
        // TO-DO
        return this._objectList.find(element => element.id == id)
    }

    update(id: number, entity: InvoiceEntity) {
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