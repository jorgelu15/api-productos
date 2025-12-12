import { ProveedorDTO } from "../../../application/dtos/proveedor.dto";
import { ProveedorRepositoryPort } from "../ports/proveedor-respository.port";
export declare class ProveedorRepositoryAdapter implements ProveedorRepositoryPort {
    saveProveedor(proveedor: any): Promise<any>;
    getAllProveedoresByCliente(id_cliente: string): Promise<any>;
    getProveedorById(id: string): Promise<any>;
    updateProveedor(id: string, proveedor: ProveedorDTO): Promise<any>;
    deleteProveedor(id: string): Promise<boolean>;
}
//# sourceMappingURL=proveedor-repository.adapter.d.ts.map