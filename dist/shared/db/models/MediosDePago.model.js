"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediosDePagoModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const MediosDePagoModel = db.define('medios_de_pago', {
    id_medio_pago: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
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
    tableName: 'medios_de_pago',
    timestamps: true,
});
exports.MediosDePagoModel = MediosDePagoModel;
//# sourceMappingURL=MediosDePago.model.js.map