import { QueryInterface, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('matches', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      home_team_id: {
        allowNull: false, 
        type: DataTypes.INTEGER
      },

      home_team_goals: {
       allowNull: false, 
       type: DataTypes.INTEGER
      },

      away_team_id: {
        allowNull: false, 
        type: DataTypes.INTEGER
      },

      away_team_goals: {
        allowNull: false, 
        type: DataTypes.INTEGER
      },
      in_progress: {
        allowNull: false, 
        type: DataTypes.BOOLEAN
      },

    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('matches');
  }
};
