"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "TournamentWrestlers",
      "weight_class",
      "weight_class_id"
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "Users",
      "weight_class_id",
      "weight_class"
    );
  }
};
