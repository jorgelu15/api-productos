import { ProductoRepositoryPort } from "../../../../inventario/infrastructure/drivens/ports/inventario-repository.port";
export declare class DeleteProductoUseCase {
    private productoRepositoryPort;
    constructor(productoRepositoryPort: ProductoRepositoryPort);
    execute(id: string, id_inst: number): Promise<string>;
}
//# sourceMappingURL=delete-producto.usecase.d.ts.map