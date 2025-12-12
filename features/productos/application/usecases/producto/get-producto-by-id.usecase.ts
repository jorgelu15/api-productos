import { ProductoRepository } from "../../../infrasctructure/drivens/models/producto-repository";
import { ProductoRepositoryPort } from "../../../infrasctructure/drivens/ports/producto-repository.port";
import { ProductoDTO } from "../../dtos/ProductoDTO";
import { ProductoFactoryService } from "../../services/producto-factory.service";

export class GetProductoByCodigoUseCase {
    constructor(private productoRepositoryPort: ProductoRepositoryPort) { }


    async execute(codigo: string, nombre: string): Promise<ProductoDTO> {
        const productoFromRepository = await this.productoRepositoryPort.getProductoByCodigo(codigo, nombre);
        const producto = ProductoFactoryService.createProductoFromRepositoryDto((productoFromRepository as ProductoRepository));
        return producto;
    }


}