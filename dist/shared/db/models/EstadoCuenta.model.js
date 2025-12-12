"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoCuentaModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const EstadoCuentaModel = db.define('EstadoCuenta', {
    id_estado_cuenta: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_cuenta_credito: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    periodo: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    fecha_corte: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    fecha_vencimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    saldo_inicial: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    compras_periodo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    abonos_periodo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    intereses_periodo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    cuotas_manejo_periodo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    otros_cargos_periodo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    saldo_corte: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    pago_minimo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    pago_total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    pago_realizado: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    fecha_pago_realizado: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    en_mora: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    tableName: 'estado_cuenta',
    timestamps: true,
});
exports.EstadoCuentaModel = EstadoCuentaModel;
//# sourceMappingURL=EstadoCuenta.model.js.map