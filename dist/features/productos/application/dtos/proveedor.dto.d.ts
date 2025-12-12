export declare class ProveedorDTO {
    private nombre_proveedor;
    private telefono;
    private direccion;
    private estado;
    private id_cliente?;
    constructor(nombre_proveedor: string, telefono: string, direccion: string, estado: boolean, id_cliente?: string | undefined);
    getNombreProveedor(): string;
    getTelefono(): string;
    getDireccion(): string;
    getEstado(): boolean;
    getIdCliente(): string | undefined;
}
//# sourceMappingURL=proveedor.dto.d.ts.map