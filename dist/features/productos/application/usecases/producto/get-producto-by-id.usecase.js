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
exports.GetProductoByCodigoUseCase = void 0;
const producto_factory_service_1 = require("../../services/producto-factory.service");
class GetProductoByCodigoUseCase {
    constructor(productoRepositoryPort) {
        this.productoRepositoryPort = productoRepositoryPort;
    }
    execute(codigo, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const productoFromRepository = yield this.productoRepositoryPort.getProductoByCodigo(codigo, nombre);
            const producto = producto_factory_service_1.ProductoFactoryService.createProductoFromRepositoryDto(productoFromRepository);
            return producto;
        });
    }
}
exports.GetProductoByCodigoUseCase = GetProductoByCodigoUseCase;
//# sourceMappingURL=get-producto-by-id.usecase.js.map