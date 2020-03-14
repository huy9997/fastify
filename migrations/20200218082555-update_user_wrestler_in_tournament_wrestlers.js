"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "TournamentWrestlers",
      "user_id",
      "user_wrestler_id"
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "TournamentWrestlers",
      "user_wrestler_id",
      "user_id"
    );
  }
};
