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
exports.DeleteProductoUseCase = void 0;
class DeleteProductoUseCase {
    constructor(productoRepositoryPort) {
        this.productoRepositoryPort = productoRepositoryPort;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [affectedCount, affectedRows] = yield this.productoRepositoryPort.deleteProducto(id);
            if (affectedCount === 0) {
                throw new Error(`No se encontró el producto`);
            }
            const { id_producto } = affectedRows[0].dataValues;
            return id_producto.toString();
        });
    }
}
exports.DeleteProductoUseCase = DeleteProductoUseCase;
//# sourceMappingURL=delete-producto.usecase.js.map