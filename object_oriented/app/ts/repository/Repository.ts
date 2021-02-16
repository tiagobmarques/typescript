export class Repository<T>{

    protected _objectList : T[] = [];

    constructor(){
        this.addObjectList();
    }

    addObjectList(){
        throw new Error("This method should be implemented by class extended!");
    }

    findAll(): T[] {
        return [].concat(this._objectList);
    }

    findById(id: number) {
        throw new Error("This method should be implemented by class extended!");
    }

    save(entity: T) {
        this._objectList.push(entity);
    }

    update(id: number, entity: T) {
        throw new Error("This method should be implemented by class extended!");
    }

    delete(id: number) {
        throw new Error("This method should be implemented by class extended!");
    }
}