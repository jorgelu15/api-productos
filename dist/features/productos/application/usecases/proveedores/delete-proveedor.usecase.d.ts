import { ProveedorRepositoryPort } from "../../../infrastructure/drivens/ports/proveedor-respository.port";
export declare class DeleteProveedorUsecase {
    private readonly proveedorRepository;
    constructor(proveedorRepository: ProveedorRepositoryPort);
    execute(id: string): Promise<void>;
}
//# sourceMappingURL=delete-proveedor.usecase.d.ts.map