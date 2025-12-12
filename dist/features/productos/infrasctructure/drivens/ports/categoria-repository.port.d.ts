import { CategoriaDTO } from "../../../application/dtos/categoria.dto";
import { CategoriaRepository } from "../models/categoria-repository";
export interface CategoriaRepositoryPort {
    findAll(id_cliente: string): Promise<CategoriaRepository[] | null>;
    findById(id: string): Promise<CategoriaRepository | null>;
    create(categoria: CategoriaDTO, id_cliente: string): Promise<CategoriaRepository>;
    update(id: string, categoria: CategoriaRepository): Promise<CategoriaRepository | null>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=categoria-repository.port.d.ts.map