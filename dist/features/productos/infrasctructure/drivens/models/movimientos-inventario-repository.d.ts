export interface MovimientoInventarioRepository {
    id_movimiento_inventario?: number;
    id_producto: number;
    id_inst: number;
    id_usuario: number;
    tipo_movimiento: 'ENTRADA' | 'SALIDA';
    motivo: string;
    cantidad: number;
    costo_unitario: number;
    costo_total: number;
    referencia_tipo?: string;
    referencia_id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=movimientos-inventario-repository.d.ts.map