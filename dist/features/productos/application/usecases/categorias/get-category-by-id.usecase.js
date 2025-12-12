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
exports.GetCategoriaByIdUsecase = void 0;
class GetCategoriaByIdUsecase {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = yield this.categoriaRepository.findByCodigo(id);
            if (!categoria) {
                throw new Error("No se encontró la categoría");
            }
            return categoria;
        });
    }
}
exports.GetCategoriaByIdUsecase = GetCategoriaByIdUsecase;
//# sourceMappingURL=get-category-by-id.usecase.js.map