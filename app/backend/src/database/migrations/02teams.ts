import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('teams', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      team_name: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('teams');
  }
};
