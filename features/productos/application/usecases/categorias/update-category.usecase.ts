import { CategoriaRepositoryPort } from "../../../infrasctructure/drivens/ports/categoria-repository.port";

export class UpdateCategoryUseCase {
    constructor(private readonly categoriaRepository: CategoriaRepositoryPort) { }

    async execute(id: string, categoria: any): Promise<any> {
        if (!id) throw new Error("No se pudo actualizar la categoria con el id proporcionado");

        return await this.categoriaRepository.update(id, categoria);

    }
}