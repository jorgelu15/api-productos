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
exports.CreateCategoryUseCase = void 0;
class CreateCategoryUseCase {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    execute(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            if (categoria.codigo == "" || categoria.codigo == null) {
                throw new Error("Todos los campos son requeridos");
            }
            if (categoria.nombre == "" || categoria.nombre == null) {
                throw new Error("Todos los campos son requeridos");
            }
            if (categoria.descripcion == "" || categoria.descripcion == null) {
                throw new Error("Todos los campos son requeridos");
            }
            if (!/^[A-Za-z0-9]+$/.test(categoria.codigo)) {
                throw new Error("El código no puede contener caracteres especiales ni espacios.");
            }
            if (categoria.nombre.trim().length < 2) {
                throw new Error("El nombre debe tener mínimo 2 caracteres.");
            }
            const categoriaExistente = yield this.categoriaRepository.findByCodigo(categoria.codigo, categoria.nombre);
            if (categoriaExistente) {
                throw new Error("La categoria ya existe");
            }
            return this.categoriaRepository.create(categoria);
        });
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;
//# sourceMappingURL=create-category.usecase.js.map