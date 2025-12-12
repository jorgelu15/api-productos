import { ProductoRepository } from "../../../infrasctructure/drivens/models/producto-repository";
import { ProductoRepositoryPort } from "../../../infrasctructure/drivens/ports/producto-repository.port";

export class UpdateProductoUseCase {
    constructor(
        private productoRepositoryPort: ProductoRepositoryPort
    ) { }

    async execute(id: string, producto: ProductoRepository): Promise<any> {
        const [updatedCount, updatedRows] = await this.productoRepositoryPort.updateProducto(id, producto);
        if (updatedCount === 0) {
            throw new Error('No se encontró producto para actualizar');
        }

        return updatedRows[0].dataValues.id_producto.toString();
    }
}