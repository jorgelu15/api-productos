import { ProductoRepositoryPort } from "../../../infrasctructure/drivens/ports/producto-repository.port";
import { ProductoDTO } from "../../dtos/ProductoDTO";
import { ProductoFactoryService } from "../../services/producto-factory.service";

export class GetAllProductosUseCase {
    constructor(private productoRepositoryPort: ProductoRepositoryPort) { }



    async execute(): Promise<ProductoDTO[]> {


        const productos = (await this.productoRepositoryPort.getAllProductos())?.map(
            (productoFromRepositorytemp: any) => ProductoFactoryService.createProductoFromRepositoryDto(productoFromRepositorytemp));

        if (productos.length === 0) {
            throw new Error('No se encontraron productos');
        }
        
        return productos;
    }


}