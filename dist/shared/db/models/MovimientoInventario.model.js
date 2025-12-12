"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const User_model_1 = require("./User.model");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const MovimientoInventarioModel = db.define('MovimientoInventario', {
    id_movimiento_inventario: {
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
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tipo_movimiento: {
        type: sequelize_1.DataTypes.ENUM('ENTRADA', 'SALIDA'),
        allowNull: false,
    },
    motivo: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    costo_unitario: {
        type: sequelize_1.DataTypes.DECIMAL(12, 4),
        allowNull: false,
    },
    costo_total: {
        type: sequelize_1.DataTypes.DECIMAL(14, 4),
        allowNull: false,
    },
    referencia_tipo: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    referencia_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'movimiento_inventario',
    timestamps: true,
});
exports.MovimientoInventarioModel = MovimientoInventarioModel;
MovimientoInventarioModel.belongsTo(User_model_1.UserModel, {
    foreignKey: "id_usuario",
    as: "usuario"
});
//# sourceMappingURL=MovimientoInventario.model.js.map