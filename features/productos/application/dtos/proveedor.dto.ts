export class ProveedorDTO {


    constructor(
        private nombre_proveedor: string,
        private telefono: string,
        private direccion: string,
        private estado: boolean,
        private id_cliente?: string,
    ) {
        this.telefono = telefono;
        this.direccion = direccion;
        this.estado = estado;
        this.nombre_proveedor = nombre_proveedor;
        this.id_cliente = id_cliente;
    }

    public getNombreProveedor(): string {
        return this.nombre_proveedor;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public getEstado(): boolean {
        return this.estado;
    }

    public getIdCliente(): string | undefined {
        return this.id_cliente;
    }

}