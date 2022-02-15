import { FilterQuery } from "mongoose";

export interface IRead<T>{
    find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null>;
    findById(id: string): Promise<T | null>;
}

export interface IWrite<T>{
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<boolean | null>;
    delete(id: string): Promise<boolean>;
}
