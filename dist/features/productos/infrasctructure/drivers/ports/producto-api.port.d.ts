import { Request, Response } from "express";
export interface ProductoApiPort {
    createProducto(req: Request, res: Response): void;
    getAllProductos(req: Request, res: Response): void;
    getProductoById(req: Request, res: Response): void;
    updateProducto(req: Request, res: Response): void;
    deleteProducto(req: Request, res: Response): void;
    createCategoria(req: Request, res: Response): void;
    getAllCategorias(req: Request, res: Response): void;
    getCategoriaById(req: Request, res: Response): void;
    saveProveedores(req: Request, res: Response): void;
    getAllProveedoresByCliente(req: Request, res: Response): void;
    getProveedorById(req: Request, res: Response): void;
    updateProveedor(req: Request, res: Response): void;
    deleteProveedor(req: Request, res: Response): void;
}
//# sourceMappingURL=producto-api.port.d.ts.map