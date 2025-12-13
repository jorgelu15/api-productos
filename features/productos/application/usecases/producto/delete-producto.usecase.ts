import { ProductoRepositoryPort } from "../../../infrasctructure/drivens/ports/producto-repository.port";

export class DeleteProductoUseCase {
  constructor(private productoRepositoryPort: ProductoRepositoryPort) {}

  async execute(id: string): Promise<{ id_producto: string }> {
    const deletedCount = await this.productoRepositoryPort.deleteProducto(id);

    if (deletedCount === 0) {
      throw new Error("No se encontró el producto");
    }

    return { id_producto: id };
  }
}
