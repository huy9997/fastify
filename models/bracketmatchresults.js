"use strict";
module.exports = (sequelize, DataTypes) => {
  const BracketMatchResults = sequelize.define(
    "BracketMatchResults",
    {
      winner: { type: DataTypes.STRING },
      time_of_day: { type: DataTypes.DATE },
      bout_number_id: {
        type: DataTypes.INTEGER,
        allowNull: DataTypes.BOOLEAN
      }
    },
    {}
  );
  BracketMatchResults.associate = function(models) {
    BracketMatchResults.belongsTo(models.BoutNumber, {
      foreignKey: "bout_number_id",
      as: "bracket_match_result"
    });
  };
  return BracketMatchResults;
};
