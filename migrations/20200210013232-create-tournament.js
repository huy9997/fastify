"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Tournaments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tournament_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tournament_location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tournament_description: Sequelize.STRING,
      tournament_start_date: Sequelize.DATE,
      tournament_end_date: Sequelize.DATE,
      wrestling_style: Sequelize.STRING,
      wrestling_level: Sequelize.STRING,
      tournament_flier: Sequelize.STRING,
      tournament_logo: Sequelize.STRING,
      tournament_active: Sequelize.BOOLEAN,
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Tournaments");
  }
};
