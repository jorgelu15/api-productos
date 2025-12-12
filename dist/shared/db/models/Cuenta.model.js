"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const CuentaModel = db.define('cuenta_cliente', {
    id_cuenta_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    placa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sala: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ingreso: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    lavador: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    id_inst: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
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
    tableName: 'cuenta_cliente',
    timestamps: true,
});
exports.CuentaModel = CuentaModel;
//# sourceMappingURL=Cuenta.model.js.map