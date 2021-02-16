export class Repository {
    constructor() {
        this._objectList = [];
        this.addObjectList();
    }
    addObjectList() {
        throw new Error("This method should be implemented by class extended!");
    }
    findAll() {
        return [].concat(this._objectList);
    }
    findById(id) {
        throw new Error("This method should be implemented by class extended!");
    }
    save(entity) {
        this._objectList.push(entity);
    }
    update(id, entity) {
        throw new Error("This method should be implemented by class extended!");
    }
    delete(id) {
        throw new Error("This method should be implemented by class extended!");
    }
}
