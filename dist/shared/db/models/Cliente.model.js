"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const ClienteModel = db.define('Clientes', {
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_inst: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cedula: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'clientes',
    timestamps: true,
});
exports.ClienteModel = ClienteModel;
//# sourceMappingURL=Cliente.model.js.map