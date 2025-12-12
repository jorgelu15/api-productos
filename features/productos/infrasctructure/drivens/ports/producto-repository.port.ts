import { ProductoRepository } from "../models/producto-repository";

export interface ProductoRepositoryPort {
    createProducto(data: any): Promise<string>;
    getAllProductos(): Promise<ProductoRepository[]>;
    getProductoByCodigo(codigo: string, nombre: string): Promise<ProductoRepository | null>;
    updateProducto(id: string, producto?: ProductoRepository): Promise<any>;
    deleteProducto(id: string): Promise<any>;
}