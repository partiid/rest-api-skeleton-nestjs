export interface ServiceInterface<T> {
    findAll(): Promise<T[]>;
    findOne(whereUniqueInput: object): Promise<T | null>;
    create(dto: any): Promise<T>;
    delete(where: object): Promise<T>;
    update(where: object, data: object): Promise<T>;
}
