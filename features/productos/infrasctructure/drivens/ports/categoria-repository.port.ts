import { CategoriaRepository } from "../models/categoria-repository";

export interface CategoriaRepositoryPort {
    findAll(): Promise<CategoriaRepository[] | null>;
    findByCodigo(codigo: string, nombre: string): Promise<CategoriaRepository | null>;
    create(categoria: CategoriaRepository): Promise<CategoriaRepository>;
    update(id: string, categoria: CategoriaRepository): Promise<CategoriaRepository | null>;
    delete(id: string): Promise<CategoriaRepository | null>;
}
