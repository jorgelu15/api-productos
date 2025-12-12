"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const EmpresaModel = db.define('Empresas', {
    id_empresa: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_empresa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    id_plan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha_registro: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
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
    tableName: 'empresas',
    timestamps: true,
});
exports.EmpresaModel = EmpresaModel;
//# sourceMappingURL=Empresa.model.js.map