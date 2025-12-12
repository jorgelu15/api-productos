"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistenciaModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const Producto_model_1 = require("./Producto.model");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const ExistenciaModel = db.define('existencias', {
    id_existencia: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_inst: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    cantidad_minima: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    costo: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    precio_venta: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    estado: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    }
}, {
    tableName: 'existencias',
    timestamps: true, // createdAt y updatedAt
});
exports.ExistenciaModel = ExistenciaModel;
ExistenciaModel.belongsTo(Producto_model_1.ProductoModel, {
    foreignKey: "id_producto",
    as: "producto"
});
//# sourceMappingURL=Existencias.model.js.map