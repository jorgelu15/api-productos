export class ProductoDTO {


    constructor(
        private id_producto: number,
        private nombre: string,
        private codigo: string,
        private descripcion: string,
        private marca: string,
        private categoria_id: number,
        private precio: number,
        private updatedAt: Date,
        private createdAt: Date
    ) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.marca = marca;
        this.categoria_id = categoria_id;
        this.precio = precio;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }

}