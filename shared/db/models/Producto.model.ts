import { DataTypes } from 'sequelize';
import { DataBasePostgresql } from '../Database.postgresql';

const sequelize = new DataBasePostgresql();
const db = sequelize.getSequelizeInstance();

const ProductoModel = db.define('productos', {
  id_producto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,

  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categoria', // tabla de categorías
      key: 'id_categoria'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'productos',
  timestamps: true
});

export { ProductoModel };
