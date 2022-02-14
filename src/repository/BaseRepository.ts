import { IBaseRepository } from "./interfaces/IBaseRespository";

export abstract class BaseRepository<T> implements IBaseRepository<T>{
    
    public readonly _collection: Collection;

    //we created constructor with arguments to manipulate mongodb operations
    constructor(db: Db, collectionName: string) {
      this._collection = db.collection(collectionName);
    }

    create(item: T): Promise<boolean> {
        return item.save();
    }
    
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

}