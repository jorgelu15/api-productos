import { Op } from "sequelize";
import { CategoriaModel } from "../../../../../shared/db/models/Categoria.model";
import { CategoriaRepository } from "../models/categoria-repository";
import { CategoriaRepositoryPort } from "../ports/categoria-repository.port";

export class CategoryRepositoryAdapter implements CategoriaRepositoryPort {

    constructor() {
    }

    async findAll(): Promise<CategoriaRepository[] | null> {
        try {
            const categorias = await CategoriaModel.findAll({
                where: {
                    activo: true
                },
                raw: true,
            }) as unknown as CategoriaRepository[] | null;

            return categorias;
        } catch (error) {
            console.log(error);
            throw new Error("No se encontraron categorias");
        }
    }

    async findByCodigo(
        codigo: string,
        nombre: string
    ): Promise<CategoriaRepository | null> {
        try {
            const categoria = await CategoriaModel.findOne({
                where: {
                    [Op.or]: [
                        { codigo },
                        { nombre }
                    ]
                }
            }) as unknown as CategoriaRepository | null;

            return categoria;
        } catch (error) {

            console.log(error);
            throw new Error("Error al buscar la categoría");
        }
    }


    async create(categoria: any): Promise<CategoriaRepository> {
        try {
            const newCategoria = await CategoriaModel.create(categoria);
            return newCategoria as unknown as CategoriaRepository;
        } catch (error) {
            throw new Error("No se pudo crear la categoria");
        }
    }

    async update(id: string, categoria: CategoriaRepository): Promise<CategoriaRepository | null> {
        try {
            const updatedCategoria = await CategoriaModel.update(categoria, {
                where: { id_categoria: id },
            });
            return updatedCategoria as unknown as CategoriaRepository | null;
        } catch (error) {
            console.log(error);
            throw new Error("No se pudo actualizar la categoria");
        }
    }

    async delete(id: string): Promise<CategoriaRepository | null> {
        try {
            const updatedCategoria = await CategoriaModel.update({
                activo: false
            }, {
                where: { id_categoria: id },
            });
            return updatedCategoria as unknown as CategoriaRepository | null;
        } catch (error) {
            throw new Error("No se pudo eliminar la categoria");
        }
    }
}
