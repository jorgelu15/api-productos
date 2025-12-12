import { ProductoRepository } from "../../../../inventario/infrastructure/drivens/models/producto-repository";
import { ProductoRepositoryPort } from "../../../../inventario/infrastructure/drivens/ports/inventario-repository.port";
export declare class CreateProductoUseCases {
    private productoRepositoryPort;
    private S3Client;
    constructor(productoRepositoryPort: ProductoRepositoryPort);
    execute(producto: ProductoRepository, id_inst: string, img_producto: Express.Multer.File): Promise<string>;
}
//# sourceMappingURL=create-producto.usecase.d.ts.map