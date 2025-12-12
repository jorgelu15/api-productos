"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const main_routes_1 = require("./shared/routes/main.routes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const Database_postgresql_1 = require("./shared/db/Database.postgresql");
const productos_routes_1 = require("./features/productos/productos.routes");
class App {
    constructor(port, host, middlewares) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.host = host;
        this.middlewares(middlewares);
        new Database_postgresql_1.DataBasePostgresql();
        this.routes = [
            new main_routes_1.MainRoutes(this.app)
        ];
        new productos_routes_1.ProductosRoutes(this.app);
    }
    middlewares(middlewares) {
        this.app.use((0, cors_1.default)({
            origin: ['http://localhost:5173'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type'],
        }));
        this.app.use(express_1.default.json());
        this.app.use((0, cookie_parser_1.default)());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("------------------------------------------");
            console.log(`Server listening on: http://${this.host}:${this.port}`);
            console.log("------------------------------------------");
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map