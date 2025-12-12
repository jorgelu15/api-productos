import { ProveedorRepositoryPort } from "../../../infrastructure/drivens/ports/proveedor-respository.port";
import { ProveedorDTO } from "../../dtos/proveedor.dto";
export declare class GetAllProveedoresByClienteUsecase {
    private readonly proveedorRepository;
    constructor(proveedorRepository: ProveedorRepositoryPort);
    execute(id_cliente: string): Promise<ProveedorDTO[] | null>;
}
//# sourceMappingURL=get-all-proveedores-by-cliente.usecase.d.ts.map