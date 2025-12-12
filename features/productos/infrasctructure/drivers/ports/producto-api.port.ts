import { Request, Response } from "express";

export interface ProductoApiPort {
    createProducto(req: Request, res: Response): void;
    getAllProductos(req: Request, res: Response): void;
    getProductoByCodigo(req: Request, res: Response): void;
    updateProducto(req: Request, res: Response): void;
    deleteProducto(req: Request, res: Response): void;


    createCategoria(req: Request, res: Response): void;
    getAllCategorias(req: Request, res: Response): void;
    updateCategoria(req: Request, res: Response): void;
    deleteCategoria(req: Request, res: Response): void;

}