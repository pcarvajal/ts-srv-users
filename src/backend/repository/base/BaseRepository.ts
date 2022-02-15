import { Document, FilterQuery, Model, Mongoose } from "mongoose";
import { IRead, IWrite } from "./IBaseRespository";

export abstract class BaseRepository<T extends Document> implements IRead<T>, IWrite<T>{

    private model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this.model = schemaModel;
    }

    async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
        return await this.model.find(entityFilterQuery);
    }
    
    async findById(id: string): Promise<T | null> {
        return await this.model.findById(id);
    }

    async update(id: string, item: T): Promise<boolean | null> {
        return await this.model.findByIdAndUpdate(id, item);
    }

    async delete(id: string): Promise<boolean> {
        return await this.model.remove(id);
    }

    async create(item: T): Promise<T> {
        return await item.save();
    }

}