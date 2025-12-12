"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaCreditoModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const Cliente_model_1 = require("./Cliente.model");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const CuentaCreditoModel = db.define('CuentaCredito', {
    id_cuenta_credito: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'id_cliente'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    id_inst: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    cupo_maximo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    cupo_disponible: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    estado_credito: {
        type: sequelize_1.DataTypes.ENUM('ACTIVO', 'EN_MORA', 'BLOQUEADO'),
        allowNull: true,
        defaultValue: 'ACTIVO'
    },
    dia_corte: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    cuotas_predeterminadas: {
        type: sequelize_1.DataTypes.ENUM('1', '2', '3', '6'),
        allowNull: true,
        defaultValue: '1',
    },
    tasa_interes_mensual: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    cobra_intereses: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    cobra_cuota_manejo: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    valor_cuota_manejo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 3000
    },
    deuda_actual: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    fecha_ultima_compra: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    fecha_ultimo_pago: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    monto_ultimo_pago: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    dias_mora: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'cuenta_credito',
    timestamps: true,
});
exports.CuentaCreditoModel = CuentaCreditoModel;
CuentaCreditoModel.belongsTo(Cliente_model_1.ClienteModel, {
    foreignKey: "id_cliente",
    as: "clientes",
});
//# sourceMappingURL=CuentaCredito.model.js.map