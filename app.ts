import express, { Application } from "express";
import cors from "cors"
import { Routes } from "./shared/routes/routes";
import { MainRoutes } from "./shared/routes/main.routes";
import cookieParser from "cookie-parser";
import { DataBasePostgresql } from "./shared/db/Database.postgresql";
import { ProductosRoutes } from "./features/productos/productos.routes";
export class App {
    private app: Application;
    private port: number;
    private host: string;

    private routes: Routes[];

    constructor(port: number, host: string, middlewares?: any[]) {
        this.app = express();
        this.port = port;
        this.host = host;
        this.middlewares(middlewares);

        new DataBasePostgresql();

        this.routes = [
            new MainRoutes(this.app)
        ]
        new ProductosRoutes(this.app);
    }

    private middlewares(middlewares?: any[]) {

        this.app.use(cors({
            origin: ['http://localhost:5173'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type'],
        }));
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("------------------------------------------");
            console.log(`Server listening on: http://${this.host}:${this.port}`);
            console.log("------------------------------------------");
        })
    }
}