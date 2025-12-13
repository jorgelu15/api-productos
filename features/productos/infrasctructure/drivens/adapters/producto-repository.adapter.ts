import { ProductoRepositoryPort } from '../ports/producto-repository.port';
import { ProductoRepository } from '../models/producto-repository';
import { ProductoModel } from '../../../../../shared/db/models/Producto.model';


export class ProductoRepositoryAdapter implements ProductoRepositoryPort {


    constructor() { }

    async createProducto(data: any): Promise<string> {
        try {
            const nuevoProducto = await ProductoModel.create(data);
            return nuevoProducto.dataValues.id_producto.toString();

        } catch (error: any) {
            console.error('Error al guardar el producto:', error);
            throw new Error(error.message || 'Error al guardar el producto');
        }
    }

    async getAllProductos(): Promise<ProductoRepository[]> {
        try {
            const productos = await ProductoModel.findAll({
                order: [['id_producto', 'DESC']]
            });

            return productos.map((producto) => producto.dataValues);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
            throw new Error('Error al obtener los productos');
        }
    }

    async getProductoByCodigo(codigo: string, nombre: string): Promise<ProductoRepository | null> {
        try {
            const producto = await ProductoModel.findOne({
                where: { codigo: codigo, nombre: nombre },
                order: [['id_producto', 'DESC']],
                raw: true
            }) as unknown as ProductoRepository | null;
            return producto;
        } catch (error) {
            console.error('Error al obtener el producto:', error);
            throw new Error('Error al obtener el producto');
        }
    }

    async updateProducto(id: string, producto: ProductoRepository): Promise<any> {
        try {
            const productoUpdated = await ProductoModel.update(producto, {
                where: { id_producto: id },
                returning: true
            });


            return productoUpdated;
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            throw new Error('Error al actualizar el producto');
        }
    }

    async deleteProducto(id: string): Promise<number> {
        try {
            const deletedCount = await ProductoModel.destroy({
                where: { id_producto: id },
            });

            return deletedCount; 
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            throw new Error("Error al eliminar el producto");
        }
    }

} 