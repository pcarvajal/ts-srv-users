interface IRead<T>{
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
}

interface IWrite<T>{
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}

export interface IBaseRepository<T> extends IRead<T>, IWrite<T>{}