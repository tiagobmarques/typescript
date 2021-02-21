export interface IContactEntity{
    id: number,
    name: String
}

export class ContactEntity {

    public id: number;
    public name: String;

    constructor (data: IContactEntity) {
        this.id = data.id,
        this.name = data.name;
    }
}