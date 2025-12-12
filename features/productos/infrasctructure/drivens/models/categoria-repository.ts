export interface CategoriaRepository {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string;
    activo: boolean;
    updatedAt: Date;
    createdAt: Date;
}