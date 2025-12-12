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
exports.DataBasePostgresql = void 0;
const sequelize_1 = require("sequelize");
class DataBasePostgresql {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize(`midgar_erp`, `midgar`, `123_Midgar`, {
            host: `localhost`,
            port: Number(process.env.DB_PORT) || 5432,
            dialect: 'postgres',
            logging: console.log,
            dialectOptions: {
            // ssl: {
            //     require: false, // AWS RDS necesita SSL
            //     rejectUnauthorized: false,
            // },
            },
            pool: {
                max: 8,
                min: 2,
                acquire: 5000,
                idle: 10000,
            }
        });
        this.testConnection();
    }
    testConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.authenticate();
                console.log('Conexión establecida con éxito.');
            }
            catch (error) {
                console.error('Error al conectar con la base de datos:', error);
            }
        });
    }
    getSequelizeInstance() {
        return this.sequelize;
    }
    closeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.close();
                console.log('Conexión cerrada con éxito.');
            }
            catch (error) {
                console.error('Error al cerrar la conexión:', error);
            }
        });
    }
}
exports.DataBasePostgresql = DataBasePostgresql;
//# sourceMappingURL=Database.postgresql.js.map