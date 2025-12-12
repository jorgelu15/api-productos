import { CategoriaRepositoryPort } from "../../../infrastructure/drivens/ports/categoria-repository.port";
export declare class GetCategoriaByIdUsecase {
    private readonly categoriaRepository;
    constructor(categoriaRepository: CategoriaRepositoryPort);
    execute(id: string): Promise<any>;
}
//# sourceMappingURL=get-category-by-id.usecase.d.ts.map