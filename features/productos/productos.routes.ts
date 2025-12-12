import { Application } from "express";
import { ProductoRepositoryAdapter } from "./infrasctructure/drivens/adapters/producto-repository.adapter";
import { CreateProductoUseCases } from "./application/usecases/producto/create-producto.usecase";
import { GetAllProductosUseCase } from "./application/usecases/producto/get-all-productos.usecase";
import { GetProductoByCodigoUseCase } from "./application/usecases/producto/get-producto-by-id.usecase";
import { UpdateProductoUseCase } from "./application/usecases/producto/update-producto.usecase";
import { DeleteProductoUseCase } from "./application/usecases/producto/delete-producto.usecase";
import { CreateCategoryUseCase } from "./application/usecases/categorias/create-category.usecase";
import { GetAllCategoriesByClienteUseCase } from "./application/usecases/categorias/get-all-categories-by-cliente.usecase";
import { CategoryRepositoryAdapter } from "./infrasctructure/drivens/adapters/category-repository.adapter";
import { ProductoApiAdapter } from "./infrasctructure/drivers/adapters/producto-api.adapter";
import { UpdateCategoryUseCase } from "./application/usecases/categorias/update-category.usecase";
import { DeleteCategoryUseCase } from "./application/usecases/categorias/delete-category.usecase";


export class ProductosRoutes {
    constructor(private app: Application) {
        //drivens 
        const ProductosRepositoryAdapter = new ProductoRepositoryAdapter();
        const categoriaRepositoryAdapter = new CategoryRepositoryAdapter();

        //usecases
        const createProductoUseCase = new CreateProductoUseCases(ProductosRepositoryAdapter);
        const getAllProductosUseCase = new GetAllProductosUseCase(ProductosRepositoryAdapter);
        const getProductoByCodigoUseCase = new GetProductoByCodigoUseCase(ProductosRepositoryAdapter);
        const updateProductoUseCase = new UpdateProductoUseCase(ProductosRepositoryAdapter);
        const deleteProductoUseCase = new DeleteProductoUseCase(ProductosRepositoryAdapter);

        const createCategoriaUsecase = new CreateCategoryUseCase(categoriaRepositoryAdapter);
        const getAllCategoriasByclienteUseCase = new GetAllCategoriesByClienteUseCase(categoriaRepositoryAdapter);
        const updateCategoriaUsecase = new UpdateCategoryUseCase(categoriaRepositoryAdapter);
        const deleteCategoriaUsecase = new DeleteCategoryUseCase(categoriaRepositoryAdapter);


        //adapters
        new ProductoApiAdapter(
            this.app,
            createProductoUseCase,
            getAllProductosUseCase,
            getProductoByCodigoUseCase,
            updateProductoUseCase,
            deleteProductoUseCase,
            createCategoriaUsecase,
            getAllCategoriasByclienteUseCase,
            updateCategoriaUsecase,
            deleteCategoriaUsecase
        );

    }
}