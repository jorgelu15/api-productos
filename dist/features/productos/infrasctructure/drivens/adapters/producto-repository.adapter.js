"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRepositoryAdapter = void 0;
const Producto_model_1 = require("../../../../../shared/db/models/Producto.model");
class ProductoRepositoryAdapter {
    constructor() { }
    createProducto(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoProducto = yield Producto_model_1.ProductoModel.create(data);
                return nuevoProducto.dataValues.id_producto.toString();
            }
            catch (error) {
                console.error('Error al guardar el producto:', error);
                throw new Error(error.message || 'Error al guardar el producto');
            }
        });
    }
    getAllProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productos = yield Producto_model_1.ProductoModel.findAll({
                    order: [['id_producto', 'DESC']]
                });
                return productos.map((producto) => producto.dataValues);
            }
            catch (error) {
                console.error('Error al obtener los productos:', error);
                throw new Error('Error al obtener los productos');
            }
        });
    }
    getProductoByCodigo(codigo, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const producto = yield Producto_model_1.ProductoModel.findOne({
                    where: { codigo: codigo, nombre: nombre },
                    order: [['id_producto', 'DESC']],
                    raw: true
                });
                return producto;
            }
            catch (error) {
                console.error('Error al obtener el producto:', error);
                throw new Error('Error al obtener el producto');
            }
        });
    }
    updateProducto(id, producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productoUpdated = yield Producto_model_1.ProductoModel.update(producto, {
                    where: { id_producto: id },
                    returning: true
                });
                return productoUpdated;
            }
            catch (error) {
                console.error('Error al actualizar el producto:', error);
                throw new Error('Error al actualizar el producto');
            }
        });
    }
    deleteProducto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Producto_model_1.ProductoModel.destroy({
                    where: { id_producto: id }
                });
            }
            catch (error) {
                console.error('Error al eliminar el producto:', error);
                throw new Error('Error al eliminar el producto');
            }
        });
    }
}
exports.ProductoRepositoryAdapter = ProductoRepositoryAdapter;
//# sourceMappingURL=producto-repository.adapter.js.map