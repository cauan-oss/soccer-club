import { DataTypes, Model } from 'sequelize';
import db from '.';

class Users extends Model {
  declare id: number;
  declare userName: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

Users.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER(),
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  underscored: true,
  // essa instancia sequelize: db; serve para fazer conexao com o banco de dados;
  sequelize: db,
  modelName: 'users',
  /* essa instancia timeStamps: false; serve
  para cria automaticamente as colunas createdAt e updatedAt,
  quando colocamos false ela desabilita a coluna */
  timestamps: false,

});
export default Users;
