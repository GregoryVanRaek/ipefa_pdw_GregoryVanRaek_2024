export interface CrudService<T0, T1, T2, T3> {
    create(payload: T1): Promise<T0>;
    delete(id: T3): Promise<void>;
    detail(id: T3): Promise<T0>;
    getAll(): Promise<T0[]>;
    update(payload: T2): Promise<T0>;
}
