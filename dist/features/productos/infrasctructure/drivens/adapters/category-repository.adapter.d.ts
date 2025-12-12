import { CategoriaRepository } from "../models/categoria-repository";
import { CategoriaRepositoryPort } from "../ports/categoria-repository.port";
export declare class CategoryRepositoryAdapter implements CategoriaRepositoryPort {
    constructor();
    findAll(id_cliente: string): Promise<CategoriaRepository[] | null>;
    findById(id: string): Promise<CategoriaRepository | null>;
    create(categoria: any): Promise<CategoriaRepository>;
    update(id: string, categoria: CategoriaRepository): Promise<CategoriaRepository | null>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=category-repository.adapter.d.ts.map