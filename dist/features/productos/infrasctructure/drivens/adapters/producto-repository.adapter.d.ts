import { ProductoRepositoryPort } from '../ports/producto-repository.port';
import { ProductoRepository } from '../models/producto-repository';
export declare class ProductoRepositoryAdapter implements ProductoRepositoryPort {
    private productoRepository;
    constructor();
    createProducto(data: any): Promise<string>;
    getAllProductos(id_inst: number): Promise<ProductoRepository[]>;
    getProductoById(id: string, id_inst: number): Promise<ProductoRepository | null>;
    updateProducto(id: string, producto: ProductoRepository, id_inst: number): Promise<any>;
    deleteProducto(id: string, id_inst: number): Promise<any>;
    abastecerInventario(id: string, cantidad: number, id_inst: string): Promise<any>;
}
//# sourceMappingURL=producto-repository.adapter.d.ts.map