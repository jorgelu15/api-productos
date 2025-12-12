import { CategoriaRepositoryPort } from "../../../infrasctructure/drivens/ports/categoria-repository.port";

export class DeleteCategoryUseCase {
    constructor(private readonly categoriaRepository: CategoriaRepositoryPort) { }



    async execute(id: string): Promise<any> {
        if(!id) throw new Error("No se pudo eliminar la categoria con el id proporcionado");
        await this.categoriaRepository.delete(id);
    }
}