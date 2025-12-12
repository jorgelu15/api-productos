import { ProductoRepository } from "../models/producto-repository";
export interface ProductoRepositoryPort {
    createProducto(data: any): Promise<string>;
    getAllProductos(id_inst: number): Promise<ProductoRepository[]>;
    getProductoById(id: string, id_inst: number): Promise<ProductoRepository | null>;
    updateProducto(id: string, producto?: ProductoRepository, id_inst?: number): Promise<any>;
    deleteProducto(id: string, id_inst: number): Promise<any>;
    abastecerInventario(id: string, cantidad: number, id_inst: string): Promise<any>;
}
//# sourceMappingURL=producto-repository.port.d.ts.map