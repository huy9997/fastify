"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: { type: Sequelize.STRING },
      last_name: { type: Sequelize.STRING },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      wins: { type: Sequelize.INTEGER },
      losses: { type: Sequelize.INTEGER },
      wrestling_level: { type: Sequelize.STRING },
      type_of_account: {
        type: Sequelize.ENUM,
        values: ["wrestler", "admin"],
        allowNull: false
      },
      active: { type: Sequelize.BOOLEAN },
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
    return queryInterface.dropTable("Users");
  }
};
