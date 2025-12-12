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
exports.CreateProveedorUsecase = void 0;
const proveedor_dto_1 = require("../../dtos/proveedor.dto");
class CreateProveedorUsecase {
    constructor(proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }
    execute(data, id_cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const proveedor = new proveedor_dto_1.ProveedorDTO(data.getNombreProveedor(), data.getTelefono(), data.getDireccion(), data.getEstado(), id_cliente);
            return this.proveedorRepository.saveProveedor(proveedor);
        });
    }
}
exports.CreateProveedorUsecase = CreateProveedorUsecase;
//# sourceMappingURL=create-proveedor.usecase.js.map