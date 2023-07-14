import { QueryInterface,  DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      }, 
      password: {
        allowNull: false, 
        type: DataTypes.STRING
      }, 
      email: {
        allowNull: false, 
        type: DataTypes.STRING
      }, 
      role: {
        allowNull: false, 
        type: DataTypes.STRING
      }
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('users');
  }
};
