import { ProductoDTO } from "../../dtos/ProductoDTO";
import { ProductoRepositoryPort } from "../../../../inventario/infrastructure/drivens/ports/inventario-repository.port";
export declare class GetProductoByIdUseCase {
    private productoRepositoryPort;
    constructor(productoRepositoryPort: ProductoRepositoryPort);
    execute(id: string, id_inst: number): Promise<ProductoDTO>;
}
//# sourceMappingURL=get-producto-by-id.usecase.d.ts.map