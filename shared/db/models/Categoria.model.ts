import { DataTypes, Sequelize } from 'sequelize';
import { DataBasePostgresql } from '../Database.postgresql';
const sequelize = new DataBasePostgresql();
const db = sequelize.getSequelizeInstance();

const CategoriaModel = db.define('categoria', {
  id_categoria: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'categoria',
  timestamps: true,
}
)

export { CategoriaModel };