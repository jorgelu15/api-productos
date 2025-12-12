"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepositoryAdapter = void 0;
const sequelize_1 = require("sequelize");
const Categoria_model_1 = require("../../../../../shared/db/models/Categoria.model");
class CategoryRepositoryAdapter {
    constructor() {
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorias = yield Categoria_model_1.CategoriaModel.findAll({
                    raw: true,
                });
                return categorias;
            }
            catch (error) {
                console.log(error);
                throw new Error("No se encontraron categorias");
            }
        });
    }
    findByCodigo(codigo, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoria = yield Categoria_model_1.CategoriaModel.findOne({
                    where: {
                        [sequelize_1.Op.or]: [
                            { codigo },
                            { nombre }
                        ]
                    }
                });
                return categoria;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al buscar la categoría");
            }
        });
    }
    create(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCategoria = yield Categoria_model_1.CategoriaModel.create(categoria);
                return newCategoria;
            }
            catch (error) {
                throw new Error("No se pudo crear la categoria");
            }
        });
    }
    update(id, categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCategoria = yield Categoria_model_1.CategoriaModel.update(categoria, {
                    where: { id_categoria: id },
                });
                return updatedCategoria;
            }
            catch (error) {
                console.log(error);
                throw new Error("No se pudo actualizar la categoria");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCategoria = yield Categoria_model_1.CategoriaModel.update({
                    activo: false
                }, {
                    where: { id_categoria: id },
                });
                return updatedCategoria;
            }
            catch (error) {
                throw new Error("No se pudo eliminar la categoria");
            }
        });
    }
}
exports.CategoryRepositoryAdapter = CategoryRepositoryAdapter;
//# sourceMappingURL=category-repository.adapter.js.map