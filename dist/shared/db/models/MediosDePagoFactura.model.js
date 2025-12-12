"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediosDePagoFacturaModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const MediosDePagoFacturaModel = db.define('medios_de_pago_factura', {
    id_medio_pago_factura: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_factura: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_medio_pago: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    monto: {
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
    tableName: 'medios_de_pago_factura',
    timestamps: true,
});
exports.MediosDePagoFacturaModel = MediosDePagoFacturaModel;
//# sourceMappingURL=MediosDePagoFactura.model.js.map