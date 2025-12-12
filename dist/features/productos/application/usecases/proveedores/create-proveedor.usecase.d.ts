import { ProveedorRepositoryPort } from "../../../infrastructure/drivens/ports/proveedor-respository.port";
import { ProveedorDTO } from "../../dtos/proveedor.dto";
export declare class CreateProveedorUsecase {
    private readonly proveedorRepository;
    constructor(proveedorRepository: ProveedorRepositoryPort);
    execute(data: ProveedorDTO, id_cliente: string): Promise<ProveedorDTO>;
}
//# sourceMappingURL=create-proveedor.usecase.d.ts.map