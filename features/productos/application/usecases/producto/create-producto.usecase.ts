// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { v4 as uuidv4 } from "uuid";
import { ProductoRepositoryPort } from "../../../infrasctructure/drivens/ports/producto-repository.port";
import { ProductoRepository } from "../../../infrasctructure/drivens/models/producto-repository";

export class CreateProductoUseCases {
    // private S3Client: S3Client;
    constructor(private productoRepositoryPort: ProductoRepositoryPort) {

    }

    async execute(producto: ProductoRepository): Promise<string> {

        if (producto.codigo === "" || producto.codigo === null) throw new Error("El codigo es requerido");
        if (producto.nombre === "" || producto.nombre === null) throw new Error("El nombre es requerido");
        if (producto.descripcion === "" || producto.descripcion === null) throw new Error("La descripcion es requerida");
        if (producto.marca === "" || producto.marca === null) throw new Error("La marca es requerida");
        if (producto.categoria_id === null) throw new Error("La categoria es requerida");
        if (producto.precio === null) throw new Error("El precio es requerido");

        if (!/^[A-Za-z0-9]{4,10}$/.test(producto.codigo)) {
            throw new Error("El código debe tener entre 4 y 10 caracteres y solo puede contener letras y números.");
        }

        if (!/^.{4,100}$/.test(producto.nombre)) {
            throw new Error("El nombre debe tener mínimo 4 caracteres.");
        }

        if(!/^[0-9]+.$/.test(String(producto.precio))) {
            throw new Error("El precio debe ser un número.");
        }


        const existente = await this.productoRepositoryPort.getProductoByCodigo(producto.codigo, producto.nombre);
        if (existente) throw new Error("Ya existe un producto con el código ingresado");

        return this.productoRepositoryPort.createProducto(producto);
    }
}