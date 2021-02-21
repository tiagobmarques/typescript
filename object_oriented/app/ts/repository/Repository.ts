interface Entity {
    id: number
}

export abstract class Repository<T extends Entity>{

    protected _objectList : T[] = [];

    constructor(){
        this.addObjectList();
    }

    addObjectList(){
        throw new Error("This method should be implemented by class extended!");
    }

    findAll(): T[] {
        return [...this._objectList];
    }

    findById(id: number) {
        return this._objectList.find(element => element.id == id)
    }

    save(entity: T) {
        this._objectList.push(entity);
    }

    update(id: number, entity: T) {
        const index = this.findAll().map(e => e.id).indexOf(id);

        if (index > -1) {
            this._objectList[index] = entity;
        }
    }

    delete(id: number) {
        const element = this.findById(id);
        const index = this.findAll().indexOf(element);

        if (index > -1) {
            this._objectList.splice(index, 1);
        }
    }
}