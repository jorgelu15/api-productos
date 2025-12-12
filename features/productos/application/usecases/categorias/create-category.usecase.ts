import { CategoriaRepository } from "../../../infrasctructure/drivens/models/categoria-repository";
import { CategoriaRepositoryPort } from "../../../infrasctructure/drivens/ports/categoria-repository.port";
import { CategoriaDTO } from "../../dtos/categoria.dto";

export class CreateCategoryUseCase {
    constructor(private readonly categoriaRepository: CategoriaRepositoryPort) { }

    async execute(categoria: CategoriaRepository): Promise<CategoriaRepository> {
        if (categoria.codigo == "" || categoria.codigo == null) {
            throw new Error("Todos los campos son requeridos");
        }

        if (categoria.nombre == "" || categoria.nombre == null) {
            throw new Error("Todos los campos son requeridos");
        }

        if (categoria.descripcion == "" || categoria.descripcion == null) {
            throw new Error("Todos los campos son requeridos");
        }

        if (!/^[A-Za-z0-9]+$/.test(categoria.codigo)) {
            throw new Error("El código no puede contener caracteres especiales ni espacios.");
        }

        if (categoria.nombre.trim().length < 2) {
            throw new Error("El nombre debe tener mínimo 2 caracteres.");
        }

        const categoriaExistente = await this.categoriaRepository.findByCodigo(categoria.codigo, categoria.nombre);
        if (categoriaExistente) {
            throw new Error("La categoria ya existe");
        }

        return this.categoriaRepository.create(categoria);
    }
}
