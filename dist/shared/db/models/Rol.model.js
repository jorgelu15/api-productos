"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const RolModel = db.define('rol', {
    id_rol: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id_empresa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'empresas',
            key: 'id_empresa'
        }
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
    tableName: 'rol',
    timestamps: true,
});
exports.RolModel = RolModel;
//# sourceMappingURL=Rol.model.js.map