import { CategoriaRepository } from "../../../infrastructure/drivens/models/categoria-repository";
import { CategoriaRepositoryPort } from "../../../infrastructure/drivens/ports/categoria-repository.port";
export declare class CreateCategoryUseCase {
    private readonly categoriaRepository;
    constructor(categoriaRepository: CategoriaRepositoryPort);
    execute(categoria: CategoriaRepository, id_cliente: string): Promise<CategoriaRepository>;
}
//# sourceMappingURL=create-category.usecase.d.ts.map