import { ProductoRepositoryPort } from "../../../infrasctructure/drivens/ports/producto-repository.port";

export class DeleteProductoUseCase {
    constructor(
        private productoRepositoryPort: ProductoRepositoryPort
    ) { }

    async execute(id: string): Promise<string> {
        const [affectedCount, affectedRows] = await this.productoRepositoryPort.deleteProducto(id);

        if (affectedCount === 0) {
            throw new Error(`No se encontró el producto`);
        }

        const { id_producto } = affectedRows[0].dataValues;
        return id_producto.toString();
    }
}