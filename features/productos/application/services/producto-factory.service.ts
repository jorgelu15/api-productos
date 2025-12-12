import { ProductoRepository } from "../../infrasctructure/drivens/models/producto-repository";
import { ProductoDTO } from "../dtos/ProductoDTO";

export class ProductoFactoryService {

    static createProductoFromRepositoryDto(productoRepository: ProductoRepository): ProductoDTO {
        return new ProductoDTO(
            productoRepository.id_producto,
            productoRepository.nombre,
            productoRepository.codigo,
            productoRepository.descripcion,
            productoRepository.marca,
            productoRepository.categoria_id,
            productoRepository.precio,
            productoRepository.updatedAt,
            productoRepository.createdAt
        );
    }
}   