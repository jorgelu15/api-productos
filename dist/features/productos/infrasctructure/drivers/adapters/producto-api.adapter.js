"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoApiAdapter = void 0;
const routes_1 = require("../../../../../shared/routes/routes");
const multer_1 = __importDefault(require("multer"));
class ProductoApiAdapter extends routes_1.Routes {
    constructor(app, createProductoUseCase, getAllProductosUseCase, getProductoByCodigoUseCase, updateProductoUseCase, deleteProductoUseCase, createCategoriaUsecase, getAllCategoriasByclienteUseCase, updateCategoriaUsecase, deleteCategoriaUsecase) {
        super(ProductoApiAdapter.PRODUCTOS_ROUTE);
        this.createProductoUseCase = createProductoUseCase;
        this.getAllProductosUseCase = getAllProductosUseCase;
        this.getProductoByCodigoUseCase = getProductoByCodigoUseCase;
        this.updateProductoUseCase = updateProductoUseCase;
        this.deleteProductoUseCase = deleteProductoUseCase;
        this.createCategoriaUsecase = createCategoriaUsecase;
        this.getAllCategoriasByclienteUseCase = getAllCategoriasByclienteUseCase;
        this.updateCategoriaUsecase = updateCategoriaUsecase;
        this.deleteCategoriaUsecase = deleteCategoriaUsecase;
        const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
        //categorias
        app.post(this.route + "/categorias", this.createCategoria.bind(this));
        app.get(this.route + "/categorias", this.getAllCategorias.bind(this));
        app.put(this.route + "/categorias/:id", this.updateCategoria.bind(this));
        app.delete(this.route + "/categorias/:id", this.deleteCategoria.bind(this));
        //productos
        app.post(this.route, this.createProducto.bind(this));
        app.get(this.route, this.getAllProductos.bind(this));
        app.get(this.route + "/:id", this.getProductoByCodigo.bind(this));
        app.put(this.route + "/:id", this.updateProducto.bind(this));
        app.delete(this.route + "/:id", this.deleteProducto.bind(this));
    }
    createProducto(req, res) {
        const producto = req.body;
        this.createProductoUseCase.execute(producto)
            .then(result => res.status(200).json({ message: "El producto fue creado con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }
    getAllProductos(req, res) {
        this.getAllProductosUseCase.execute().then(productos => {
            res.status(200).json(productos);
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
    }
    getProductoByCodigo(req, res) {
        const id = req.params.id;
        const nombre = req.params.nombre;
        this.getProductoByCodigoUseCase.execute(id, nombre)
            .then(productos => res.status(200).json(productos))
            .catch(error => res.status(500).json({ error: error.message }));
    }
    updateProducto(req, res) {
        const id = req.params.id;
        const producto = req.body;
        this.updateProductoUseCase.execute(id, producto)
            .then(result => res.status(200).json({ message: "El producto fue actualizado con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }
    deleteProducto(req, res) {
        const id = req.params.id;
        this.deleteProductoUseCase.execute(id)
            .then(result => res.status(200).json({ message: "El producto fue eliminado con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }
    createCategoria(req, res) {
        const categoria = req.body;
        this.createCategoriaUsecase.execute(categoria)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(500).json({ error: error.message }));
    }
    getAllCategorias(req, res) {
        this.getAllCategoriasByclienteUseCase.execute()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({ error: error.message }));
    }
    updateCategoria(req, res) {
        const id = req.params.id;
        const categoria = req.body;
        this.updateCategoriaUsecase.execute(id, categoria)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({ error: error.message }));
    }
    deleteCategoria(req, res) {
        const id = req.params.id;
        this.deleteCategoriaUsecase.execute(id)
            .then(result => res.status(200).json({ message: "La categoria fue eliminada con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }
}
exports.ProductoApiAdapter = ProductoApiAdapter;
ProductoApiAdapter.PRODUCTOS_ROUTE = "productos";
//# sourceMappingURL=producto-api.adapter.js.map