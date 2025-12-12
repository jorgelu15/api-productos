import { CategoriaRepository } from "../../../infrasctructure/drivens/models/categoria-repository";
import { CategoriaRepositoryPort } from "../../../infrasctructure/drivens/ports/categoria-repository.port";

export class GetAllCategoriesByClienteUseCase {
    constructor(private readonly categoriaRepository: CategoriaRepositoryPort) {}

    async execute(): Promise<CategoriaRepository[]> {
        const categorias = await this.categoriaRepository.findAll();
        
        if (!categorias) {
            throw new Error("No se encontraron categorías");
        }

        return categorias;
    }
}
