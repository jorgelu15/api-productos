import { MovimientoInventarioRepository } from "../models/movimientos-inventario-repository";
import { MovimientoInventarioRepositoryPort } from "../ports/movimiento-inventario-repositoru.port";
export declare class MovimientoInventarioRepositoryAdapter implements MovimientoInventarioRepositoryPort {
    private movimientoInventarioRepository;
    constructor();
    createMovimientoInventario(movimientoInventario: any, id_inst: string): Promise<string>;
    getAllMovimientosInventarioFisico(id_producto: string, id_inst: string): Promise<MovimientoInventarioRepository[]>;
    getMovimientoInventarioById(id_producto: string, id_inst: string): Promise<MovimientoInventarioRepository>;
}
//# sourceMappingURL=movimiento-inventario-repository.adapter.d.ts.map