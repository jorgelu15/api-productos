import { ProductoRepositoryPort } from "../../../infrasctructure/drivens/ports/producto-repository.port";
import { ProductoDTO } from "../../dtos/ProductoDTO";
export declare class GetAllProductosUseCase {
    private productoRepositoryPort;
    constructor(productoRepositoryPort: ProductoRepositoryPort);
    execute(id_inst: number): Promise<ProductoDTO[]>;
}
//# sourceMappingURL=get-all-productos.usecase.d.ts.map