"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
class CuentaContableModel extends sequelize_1.Model {
}
const sequelize = new Database_postgresql_1.DataBasePostgresql().getSequelizeInstance();
CuentaContableModel.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    tipo_cuenta: {
        type: sequelize_1.DataTypes.ENUM('mayor', 'auxiliar', 'detalle'),
        allowNull: false,
        validate: {
            isIn: [['mayor', 'auxiliar', 'detalle']]
        }
    },
    naturaleza: {
        type: sequelize_1.DataTypes.ENUM('deudora', 'acreedora'),
        allowNull: false,
        validate: {
            isIn: [['deudora', 'acreedora']]
        }
    },
    id_padre: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'cuentas_contables',
            key: 'id'
        }
    },
    nivel: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    orden: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    id_inst: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
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
    sequelize,
    modelName: 'CuentaContable',
    tableName: 'cuentas_contables',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
});
// Asignación de las asociaciones
CuentaContableModel.associate = function (models) {
    CuentaContableModel.belongsTo(models.CuentaContable, {
        foreignKey: 'id_padre',
        as: 'padre'
    });
    CuentaContableModel.hasMany(models.CuentaContable, {
        foreignKey: 'id_padre',
        as: 'hijos'
    });
};
exports.default = CuentaContableModel;
//# sourceMappingURL=CuentaContable.model.js.map