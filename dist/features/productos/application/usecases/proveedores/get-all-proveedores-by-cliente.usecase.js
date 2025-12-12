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
exports.GetAllProveedoresByClienteUsecase = void 0;
class GetAllProveedoresByClienteUsecase {
    constructor(proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }
    execute(id_cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id_cliente) {
                throw new Error("No se proporcionó el ID del cliente");
            }
            const proveedores = yield this.proveedorRepository.getAllProveedoresByCliente(id_cliente);
            return proveedores;
        });
    }
}
exports.GetAllProveedoresByClienteUsecase = GetAllProveedoresByClienteUsecase;
//# sourceMappingURL=get-all-proveedores-by-cliente.usecase.js.map