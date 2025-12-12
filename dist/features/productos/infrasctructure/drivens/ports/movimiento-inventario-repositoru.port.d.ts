import { MovimientoInventarioRepository } from "../models/movimientos-inventario-repository";
export interface MovimientoInventarioRepositoryPort {
    createMovimientoInventario(movimientoInventarioDTO: any, id_inst: string): Promise<string>;
    getAllMovimientosInventarioFisico(id_producto: string, id_inst: string): Promise<MovimientoInventarioRepository[]>;
    getMovimientoInventarioById(id_producto: string, id_inst: string): Promise<MovimientoInventarioRepository>;
}
//# sourceMappingURL=movimiento-inventario-repositoru.port.d.ts.map