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
exports.CreateProductoUseCases = void 0;
class CreateProductoUseCases {
    // private S3Client: S3Client;
    constructor(productoRepositoryPort) {
        this.productoRepositoryPort = productoRepositoryPort;
    }
    execute(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            if (producto.codigo === "" || producto.codigo === null)
                throw new Error("El codigo es requerido");
            if (producto.nombre === "" || producto.nombre === null)
                throw new Error("El nombre es requerido");
            if (producto.descripcion === "" || producto.descripcion === null)
                throw new Error("La descripcion es requerida");
            if (producto.marca === "" || producto.marca === null)
                throw new Error("La marca es requerida");
            if (producto.categoria_id === null)
                throw new Error("La categoria es requerida");
            if (producto.precio === null)
                throw new Error("El precio es requerido");
            if (!/^[A-Za-z0-9]{4,10}$/.test(producto.codigo)) {
                throw new Error("El código debe tener entre 4 y 10 caracteres y solo puede contener letras y números.");
            }
            if (!/^.{4,100}$/.test(producto.nombre)) {
                throw new Error("El nombre debe tener mínimo 4 caracteres.");
            }
            if (!/^[0-9]+.$/.test(String(producto.precio))) {
                throw new Error("El precio debe ser un número.");
            }
            const existente = yield this.productoRepositoryPort.getProductoByCodigo(producto.codigo, producto.nombre);
            if (existente)
                throw new Error("Ya existe un producto con el código ingresado");
            return this.productoRepositoryPort.createProducto(producto);
        });
    }
}
exports.CreateProductoUseCases = CreateProductoUseCases;
//# sourceMappingURL=create-producto.usecase.js.map