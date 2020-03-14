"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "TournamentWrestlers",
      "seeding_notes",
      Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("TournamentWrestlers", "seeding_notes");
  }
};
