"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BoutNumbers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weight_class_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tournament_wrestler_id_one: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tournament_wrestler_id_two: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      wrestler_one_points: Sequelize.INTEGER,
      wrestler_two_points: Sequelize.INTEGER,
      referee: Sequelize.STRING,
      win_type: Sequelize.STRING,
      bout_number: Sequelize.INTEGER,
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
    return queryInterface.dropTable("BoutNumbers");
  }
};
