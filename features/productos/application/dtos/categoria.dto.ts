export class CategoriaDTO {


    constructor(
        private codigo: string,
        private nombre: string,
        private descripcion: string,
        private activo: string,
    ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.activo = activo;
    }

}