import { ProveedorRepositoryPort } from "../../../infrastructure/drivens/ports/proveedor-respository.port";
import { ProveedorDTO } from "../../dtos/proveedor.dto";
export declare class GetProveedorByIdUsecase {
    private readonly proveedorRepository;
    constructor(proveedorRepository: ProveedorRepositoryPort);
    execute(id: string): Promise<ProveedorDTO | null>;
}
//# sourceMappingURL=get-proveedor-by-id.usecase.d.ts.map