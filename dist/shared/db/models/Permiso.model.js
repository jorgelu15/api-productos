"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermisoModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const PermisoModel = db.define('Permiso', {
    id_permiso: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_permiso: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    codigo_permiso: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    id_empresa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'empresa',
            key: 'id_empresa'
        }
    }
}, {
    tableName: 'permiso',
    timestamps: false,
});
exports.PermisoModel = PermisoModel;
//# sourceMappingURL=Permiso.model.js.map