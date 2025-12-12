"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolPermisoModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const RolPermisoModel = db.define('RolPermiso', {
    id_rol_permiso: {
        type: sequelize_1.DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    id_rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id_permiso: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id_empresa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'rol_permiso',
    timestamps: false,
});
exports.RolPermisoModel = RolPermisoModel;
//# sourceMappingURL=RolPermiso.model.js.map