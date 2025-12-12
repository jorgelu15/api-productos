import { ProveedorDTO } from "../../../application/dtos/proveedor.dto";
export interface ProveedorRepositoryPort {
    saveProveedor(proveedor: any): Promise<any>;
    getAllProveedoresByCliente(id_cliente: string): Promise<any>;
    getProveedorById(id: string): Promise<any>;
    updateProveedor(id: string, proveedor: ProveedorDTO): Promise<any>;
    deleteProveedor(id: string): Promise<any>;
}
//# sourceMappingURL=proveedor-respository.port.d.ts.map