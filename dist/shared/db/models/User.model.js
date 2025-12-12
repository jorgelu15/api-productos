"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const UserModel = db.define('Usuario', {
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    password_hash: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.ENUM('ACTIVO', 'SUSPENDIDO', 'BLOQUEADO', 'ELIMINADO'),
        allowNull: false,
        defaultValue: 'ACTIVO',
    },
    ultimo_acceso: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    id_empresa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'empresa',
            key: 'id_empresa',
        },
        onDelete: 'CASCADE',
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    tableName: 'usuario',
    timestamps: false, // usamos created_at y updated_at manuales
});
exports.UserModel = UserModel;
//# sourceMappingURL=User.model.js.map