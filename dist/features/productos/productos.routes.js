"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosRoutes = void 0;
const producto_repository_adapter_1 = require("./infrasctructure/drivens/adapters/producto-repository.adapter");
const create_producto_usecase_1 = require("./application/usecases/producto/create-producto.usecase");
const get_all_productos_usecase_1 = require("./application/usecases/producto/get-all-productos.usecase");
const get_producto_by_id_usecase_1 = require("./application/usecases/producto/get-producto-by-id.usecase");
const update_producto_usecase_1 = require("./application/usecases/producto/update-producto.usecase");
const delete_producto_usecase_1 = require("./application/usecases/producto/delete-producto.usecase");
const create_category_usecase_1 = require("./application/usecases/categorias/create-category.usecase");
const get_all_categories_by_cliente_usecase_1 = require("./application/usecases/categorias/get-all-categories-by-cliente.usecase");
const category_repository_adapter_1 = require("./infrasctructure/drivens/adapters/category-repository.adapter");
const producto_api_adapter_1 = require("./infrasctructure/drivers/adapters/producto-api.adapter");
const update_category_usecase_1 = require("./application/usecases/categorias/update-category.usecase");
const delete_category_usecase_1 = require("./application/usecases/categorias/delete-category.usecase");
class ProductosRoutes {
    constructor(app) {
        this.app = app;
        //drivens 
        const ProductosRepositoryAdapter = new producto_repository_adapter_1.ProductoRepositoryAdapter();
        const categoriaRepositoryAdapter = new category_repository_adapter_1.CategoryRepositoryAdapter();
        //usecases
        const createProductoUseCase = new create_producto_usecase_1.CreateProductoUseCases(ProductosRepositoryAdapter);
        const getAllProductosUseCase = new get_all_productos_usecase_1.GetAllProductosUseCase(ProductosRepositoryAdapter);
        const getProductoByCodigoUseCase = new get_producto_by_id_usecase_1.GetProductoByCodigoUseCase(ProductosRepositoryAdapter);
        const updateProductoUseCase = new update_producto_usecase_1.UpdateProductoUseCase(ProductosRepositoryAdapter);
        const deleteProductoUseCase = new delete_producto_usecase_1.DeleteProductoUseCase(ProductosRepositoryAdapter);
        const createCategoriaUsecase = new create_category_usecase_1.CreateCategoryUseCase(categoriaRepositoryAdapter);
        const getAllCategoriasByclienteUseCase = new get_all_categories_by_cliente_usecase_1.GetAllCategoriesByClienteUseCase(categoriaRepositoryAdapter);
        const updateCategoriaUsecase = new update_category_usecase_1.UpdateCategoryUseCase(categoriaRepositoryAdapter);
        const deleteCategoriaUsecase = new delete_category_usecase_1.DeleteCategoryUseCase(categoriaRepositoryAdapter);
        //adapters
        new producto_api_adapter_1.ProductoApiAdapter(this.app, createProductoUseCase, getAllProductosUseCase, getProductoByCodigoUseCase, updateProductoUseCase, deleteProductoUseCase, createCategoriaUsecase, getAllCategoriasByclienteUseCase, updateCategoriaUsecase, deleteCategoriaUsecase);
    }
}
exports.ProductosRoutes = ProductosRoutes;
//# sourceMappingURL=productos.routes.js.map