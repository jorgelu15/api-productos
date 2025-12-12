import { ProductoRepository } from "../../../../inventario/infrastructure/drivens/models/producto-repository";
import { ProductoRepositoryPort } from "../../../../inventario/infrastructure/drivens/ports/inventario-repository.port";
export declare class UpdateProductoUseCase {
    private productoRepositoryPort;
    constructor(productoRepositoryPort: ProductoRepositoryPort);
    execute(id: string, producto: ProductoRepository, id_inst: number): Promise<any>;
}
//# sourceMappingURL=update-producto.usecase.d.ts.map