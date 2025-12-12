"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRolModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const UsuarioRolModel = db.define('UsuarioRol', {
    id_usuario: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    id_rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id_empresa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuario_rol',
    timestamps: false,
});
exports.UsuarioRolModel = UsuarioRolModel;
//# sourceMappingURL=UsuarioRol.model.js.map