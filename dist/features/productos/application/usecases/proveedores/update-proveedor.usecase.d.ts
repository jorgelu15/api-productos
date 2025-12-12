import { ProveedorRepositoryPort } from "../../../infrasctructure/drivens/ports/proveedor-respository.port";
import { ProveedorDTO } from "../../dtos/proveedor.dto";
export declare class UpdateProveedorUsecase {
    private readonly proveedorRepository;
    constructor(proveedorRepository: ProveedorRepositoryPort);
    execute(id: string, proveedor: ProveedorDTO): Promise<ProveedorDTO | null>;
}
//# sourceMappingURL=update-proveedor.usecase.d.ts.map