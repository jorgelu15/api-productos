"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoModel = void 0;
const sequelize_1 = require("sequelize");
const Database_postgresql_1 = require("../Database.postgresql");
const sequelize = new Database_postgresql_1.DataBasePostgresql();
const db = sequelize.getSequelizeInstance();
const ProductoModel = db.define('productos', {
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    categoria_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categoria', // tabla de categorías
            key: 'id_categoria'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'productos',
    timestamps: true
});
exports.ProductoModel = ProductoModel;
//# sourceMappingURL=Producto.model.js.map