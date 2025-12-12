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
exports.MovimientoInventarioRepositoryAdapter = void 0;
const MovimientoInventario_model_1 = require("../../../../../shared/db/models/MovimientoInventario.model");
class MovimientoInventarioRepositoryAdapter {
    constructor() {
        this.movimientoInventarioRepository = [];
    }
    createMovimientoInventario(movimientoInventario, id_inst) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoMovimientoInventario = yield MovimientoInventario_model_1.MovimientoInventariModel.create(movimientoInventario);
                return nuevoMovimientoInventario.dataValues.id_movimiento_inventario.toString();
            }
            catch (error) {
                console.error('Error al guardar el movimiento: ', error);
                throw new Error(error.message || "Error al guardar el movimiento");
            }
        });
    }
    getAllMovimientosInventarioFisico(id_producto, id_inst) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movimientosInventarioFisico = yield MovimientoInventario_model_1.MovimientoInventariModel.findAll({
                    where: {
                        id_producto,
                        id_inst,
                    },
                    order: [['createdAt', 'DESC']]
                });
                this.movimientoInventarioRepository = movimientosInventarioFisico.map((movimiento) => ({
                    id_producto: movimiento.id_producto,
                    movimiento: movimiento.movimiento, // Asegúrate que este campo exista
                    motivo: movimiento.motivo, // Asegúrate que este campo exista
                    cantidad: movimiento.cantidad,
                    saldo: movimiento.saldo, // Asegúrate que este campo exista
                    costo: movimiento.costo, // Asegúrate que este campo exista
                    costo_prom: movimiento.costo_prom, // Asegúrate que este campo exista
                    total_movimiento: movimiento.total_movimiento, // Asegúrate que este campo exista
                    valor_en_existencia: movimiento.valor_en_existencia, // Asegúrate que este campo exista
                    id_usuario: movimiento.id_usuario, // Asegúrate que este campo exista
                    id_inst: movimiento.id_inst,
                    updatedAt: movimiento.updatedAt,
                    createdAt: movimiento.createdAt
                }));
                return this.movimientoInventarioRepository;
            }
            catch (error) {
                console.error("Error al obtener movimientos de inventario físico:", error);
                throw new Error(error instanceof Error
                    ? error.message
                    : "Error desconocido al obtener movimientos de inventario físico");
            }
        });
    }
    getMovimientoInventarioById(id_producto, id_inst) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movimientoInventario = yield MovimientoInventario_model_1.MovimientoInventariModel.findOne({
                    where: {
                        id_producto: parseInt(id_producto),
                        id_inst,
                    },
                    order: [['createdAt', 'DESC']]
                });
                if (!movimientoInventario) {
                    console.log("No se encontró movimiento de inventario para el producto y la institución proporcionados.");
                    return null;
                }
                return {
                    id_producto: movimientoInventario.id_producto,
                    movimiento: movimientoInventario.movimiento, // Asegúrate que este campo exista
                    motivo: movimientoInventario.motivo, // Asegúrate que este campo exista
                    cantidad: movimientoInventario.cantidad,
                    saldo: movimientoInventario.saldo, // Asegúrate que este campo exista
                    costo: movimientoInventario.costo, // Asegúrate que este campo exista
                    costo_prom: movimientoInventario.costo_prom, // Asegúrate que este campo exista
                    total_movimiento: movimientoInventario.total_movimiento, // Asegúrate que este campo exista
                    valor_en_existencia: movimientoInventario.valor_en_existencia, // Asegúrate que este campo exista
                    id_usuario: movimientoInventario.id_usuario, // Asegúrate que este campo exista
                    id_inst: movimientoInventario.id_inst,
                    updatedAt: movimientoInventario.updatedAt,
                    createdAt: movimientoInventario.createdAt
                };
            }
            catch (error) {
                console.error("Error al obtener el movimiento de inventario:", error);
                throw new Error(error instanceof Error
                    ? error.message
                    : "Error desconocido al obtener el movimiento de inventario");
            }
        });
    }
}
exports.MovimientoInventarioRepositoryAdapter = MovimientoInventarioRepositoryAdapter;
//# sourceMappingURL=movimiento-inventario-repository.adapter.js.map