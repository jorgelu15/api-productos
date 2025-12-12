import { Application, Request, Response } from "express";
import { Routes } from "../../../../../shared/routes/routes";
import { CreateProductoUseCases } from "../../../../productos/application/usecases/producto/create-producto.usecase";
import { GetAllProductosUseCase } from "../../../../productos/application/usecases/producto/get-all-productos.usecase";
import { GetProductoByCodigoUseCase } from "../../../../productos/application/usecases/producto/get-producto-by-id.usecase";
import { UpdateProductoUseCase } from "../../../../productos/application/usecases/producto/update-producto.usecase";
import { DeleteProductoUseCase } from "../../../../productos/application/usecases/producto/delete-producto.usecase";
import { ProductoApiPort } from "../ports/producto-api.port";
import multer from "multer";
import { CreateCategoryUseCase } from "../../../application/usecases/categorias/create-category.usecase";
import { GetAllCategoriesByClienteUseCase } from "../../../application/usecases/categorias/get-all-categories-by-cliente.usecase";
import { DeleteCategoryUseCase } from "../../../application/usecases/categorias/delete-category.usecase";
import { UpdateCategoryUseCase } from "../../../application/usecases/categorias/update-category.usecase";

export class ProductoApiAdapter extends Routes implements ProductoApiPort {
    static readonly PRODUCTOS_ROUTE = "productos";
    constructor(
        app: Application,
        private createProductoUseCase: CreateProductoUseCases,
        private getAllProductosUseCase: GetAllProductosUseCase,
        private getProductoByCodigoUseCase: GetProductoByCodigoUseCase,
        private updateProductoUseCase: UpdateProductoUseCase,
        private deleteProductoUseCase: DeleteProductoUseCase,
        private createCategoriaUsecase: CreateCategoryUseCase,
        private getAllCategoriasByclienteUseCase: GetAllCategoriesByClienteUseCase,
        private updateCategoriaUsecase: UpdateCategoryUseCase,
        private deleteCategoriaUsecase: DeleteCategoryUseCase

    ) {
        super(ProductoApiAdapter.PRODUCTOS_ROUTE);
        const upload = multer({ storage: multer.memoryStorage() });
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

    public createProducto(req: Request, res: Response): void {
        const producto = req.body;
        this.createProductoUseCase.execute(producto)
            .then(result => res.status(200).json({ message: "El producto fue creado con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }

    public getAllProductos(req: Request, res: Response): void {
        this.getAllProductosUseCase.execute().then(productos => {
            res.status(200).json(productos);
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
    }

    public getProductoByCodigo(req: Request, res: Response): void {
        const id = req.params.id;
        const nombre = req.params.nombre;

        this.getProductoByCodigoUseCase.execute(id, nombre)
            .then(productos => res.status(200).json(productos))
            .catch(error => res.status(500).json({ error: error.message }));
    }

    public updateProducto(req: Request, res: Response): void {
        const id = req.params.id;
        const producto = req.body;
        this.updateProductoUseCase.execute(id, producto)
            .then(result => res.status(200).json({ message: "El producto fue actualizado con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }

    public deleteProducto(req: Request, res: Response): void {
        const id = req.params.id;
        this.deleteProductoUseCase.execute(id)
            .then(result => res.status(200).json({ message: "El producto fue eliminado con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }

    public createCategoria(req: Request, res: Response): void {
        const categoria = req.body;

        this.createCategoriaUsecase.execute(categoria)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(500).json({ error: error.message }));
    }

    public getAllCategorias(req: Request, res: Response): void {
        this.getAllCategoriasByclienteUseCase.execute()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({ error: error.message }));
    }

    public updateCategoria(req: Request, res: Response): void {
        const id = req.params.id;
        const categoria = req.body;
        this.updateCategoriaUsecase.execute(id, categoria)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({ error: error.message }));
    }

    public deleteCategoria(req: Request, res: Response): void {
        const id = req.params.id;
        this.deleteCategoriaUsecase.execute(id)
            .then(result => res.status(200).json({ message: "La categoria fue eliminada con éxito" }))
            .catch(error => res.status(500).json({ error: error.message }));
    }



}  
