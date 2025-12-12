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
exports.GetAllProductosUseCase = void 0;
const producto_factory_service_1 = require("../../services/producto-factory.service");
class GetAllProductosUseCase {
    constructor(productoRepositoryPort) {
        this.productoRepositoryPort = productoRepositoryPort;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const productos = (_a = (yield this.productoRepositoryPort.getAllProductos())) === null || _a === void 0 ? void 0 : _a.map((productoFromRepositorytemp) => producto_factory_service_1.ProductoFactoryService.createProductoFromRepositoryDto(productoFromRepositorytemp));
            if (productos.length === 0) {
                throw new Error('No se encontraron productos');
            }
            return productos;
        });
    }
}
exports.GetAllProductosUseCase = GetAllProductosUseCase;
//# sourceMappingURL=get-all-productos.usecase.js.map