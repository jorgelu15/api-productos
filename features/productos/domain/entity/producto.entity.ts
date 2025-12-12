export class ProductoEntity {


    constructor(
        private id_producto: number,
        private nombre: string,
        private codigo: string,
        private categoria_id: number,
        private marca_id: number,
        private unidad_medida_id: number,
        private impuesto_id: number,
        private proveedor_id: number,
        private foto_url: string,
        private estado: number,
        private id_inst: number,
        private updatedAt: Date,
        private createdAt: Date
    ) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.codigo = codigo;
        this.categoria_id = categoria_id;
        this.marca_id = marca_id;
        this.unidad_medida_id = unidad_medida_id;
        this.impuesto_id = impuesto_id;
        this.proveedor_id = proveedor_id;
        this.foto_url = foto_url;
        this.estado = estado;
        this.id_inst = id_inst;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }

    // Getters and Setters
    public getIdProducto(): number {
        return this.id_producto;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getCategoriaId(): number {
        return this.categoria_id;
    }


    public getMarcaId(): number {
        return this.marca_id;
    }

    public getUnidadMedidaId(): number {
        return this.unidad_medida_id;
    }

    public getImpuestoId(): number {
        return this.impuesto_id;
    }

    public getProveedorId(): number {
        return this.proveedor_id;
    }

    public getFotoUrl(): string {
        return this.foto_url;
    }

    public getEstado(): number {
        return this.estado;
    }

    public getIdInst(): number {
        return this.id_inst;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setIdProducto(id_producto: number): void {
        this.id_producto = id_producto;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setCodigo(codigo: string): void {
        this.codigo = codigo;
    }

    public setCategoriaId(categoria_id: number): void {
        this.categoria_id = categoria_id;
    }

    public setMarcaId(marca_id: number): void {
        this.marca_id = marca_id;
    }

    public setUnidadMedidaId(unidad_medida_id: number): void {
        this.unidad_medida_id = unidad_medida_id;
    }

    public setImpuestoId(impuesto_id: number): void {
        this.impuesto_id = impuesto_id;
    }
    public setProveedorId(proveedor_id: number): void {
        this.proveedor_id = proveedor_id;
    }

    public setFotoUrl(foto_url: string): void {
        this.foto_url = foto_url;
    }

    public setEstado(estado: number): void {
        this.estado = estado;
    }

    public setIdInst(id_inst: number): void {
        this.id_inst = id_inst;
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }
}