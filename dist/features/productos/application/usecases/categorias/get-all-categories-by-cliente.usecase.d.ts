import { CategoriaRepository } from "../../../infrastructure/drivens/models/categoria-repository";
import { CategoriaRepositoryPort } from "../../../infrastructure/drivens/ports/categoria-repository.port";
export declare class GetAllCategoriesByClienteUseCase {
    private readonly categoriaRepository;
    constructor(categoriaRepository: CategoriaRepositoryPort);
    execute(id_cliente: string): Promise<CategoriaRepository[]>;
}
//# sourceMappingURL=get-all-categories-by-cliente.usecase.d.ts.map