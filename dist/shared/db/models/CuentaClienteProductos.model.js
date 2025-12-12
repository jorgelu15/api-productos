"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaClienteProductos = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const Producto_model_1 = require("./Producto.model");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const CuentaClienteProductos = db.define('cuenta_cliente_productos', {
    id_cuenta_cliente_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_cuenta_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    id_inst: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
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
    tableName: 'cuenta_cliente_productos',
    timestamps: true,
});
exports.CuentaClienteProductos = CuentaClienteProductos;
CuentaClienteProductos.belongsTo(Producto_model_1.ProductoModel, {
    foreignKey: 'id_producto',
    as: 'producto'
});
//# sourceMappingURL=CuentaClienteProductos.model.js.map