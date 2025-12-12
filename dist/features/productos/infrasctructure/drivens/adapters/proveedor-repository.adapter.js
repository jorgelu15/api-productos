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
exports.ProveedorRepositoryAdapter = void 0;
const Proveedor_model_1 = require("../../../../../shared/db/models/Proveedor.model");
class ProveedorRepositoryAdapter {
    saveProveedor(proveedor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProveedor = yield Proveedor_model_1.ProveedorModel.create(proveedor);
                return newProveedor;
            }
            catch (error) {
                console.error("Error saving proveedor:", error);
                throw new Error("Error saving proveedor");
            }
        });
    }
    getAllProveedoresByCliente(id_cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const proveedores = yield Proveedor_model_1.ProveedorModel.findAll({
                    where: { id_cliente },
                    raw: true
                });
                return proveedores;
            }
            catch (error) {
                console.error("Error finding all proveedores:", error);
                throw new Error("Error finding all proveedores");
            }
        });
    }
    getProveedorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const proveedor = yield Proveedor_model_1.ProveedorModel.findByPk(id);
                return proveedor;
            }
            catch (error) {
                console.error("Error finding proveedor by ID:", error);
                throw new Error("Error finding proveedor by ID");
            }
        });
    }
    updateProveedor(id, proveedor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updated = yield Proveedor_model_1.ProveedorModel.update(proveedor, {
                    where: { id },
                });
                return updated;
            }
            catch (error) {
                console.error("Error updating proveedor:", error);
                throw new Error("Error updating proveedor");
            }
        });
    }
    deleteProveedor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield Proveedor_model_1.ProveedorModel.destroy({
                    where: { id },
                });
                return deleted !== 0;
            }
            catch (error) {
                console.error("Error deleting proveedor:", error);
                throw new Error("Error deleting proveedor");
            }
        });
    }
}
exports.ProveedorRepositoryAdapter = ProveedorRepositoryAdapter;
//# sourceMappingURL=proveedor-repository.adapter.js.map