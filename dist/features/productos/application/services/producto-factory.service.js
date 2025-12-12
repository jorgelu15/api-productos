"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoFactoryService = void 0;
const ProductoDTO_1 = require("../dtos/ProductoDTO");
class ProductoFactoryService {
    static createProductoFromRepositoryDto(productoRepository) {
        return new ProductoDTO_1.ProductoDTO(productoRepository.id_producto, productoRepository.nombre, productoRepository.codigo, productoRepository.descripcion, productoRepository.marca, productoRepository.categoria_id, productoRepository.precio, productoRepository.updatedAt, productoRepository.createdAt);
    }
}
exports.ProductoFactoryService = ProductoFactoryService;
//# sourceMappingURL=producto-factory.service.js.map