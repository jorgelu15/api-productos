"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoCreditoModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const MovimientoCreditoModel = db.define('MovimientoCredito', {
    id_movimiento_credito: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_cuenta_credito: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipo: {
        type: sequelize_1.DataTypes.ENUM('COMPRA_FIADA', 'ABONO', 'AJUSTE', 'CUOTA_MANEJO', 'INTERES', 'MORA', 'REVERSO'),
        allowNull: false,
    },
    monto: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    signo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
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
    tableName: 'movimiento_credito',
    timestamps: true,
});
exports.MovimientoCreditoModel = MovimientoCreditoModel;
//# sourceMappingURL=MovimientoCredito.model.js.map