"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const FacturaModel = db.define('facturas', {
    id_factura: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_cuenta_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
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
    tableName: 'facturas',
    timestamps: true,
});
exports.FacturaModel = FacturaModel;
//# sourceMappingURL=Factura.model.js.map