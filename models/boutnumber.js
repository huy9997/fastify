"use strict";
module.exports = (sequelize, DataTypes) => {
  const BoutNumber = sequelize.define(
    "BoutNumber",
    {
      weight_class_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tournament_wrestler_id_one: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tournament_wrestler_id_two: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      wrestler_one_points: { type: DataTypes.INTEGER },
      wrestler_two_points: { type: DataTypes.INTEGER },
      referee: { type: DataTypes.STRING },
      win_type: { type: DataTypes.STRING },
      bout_number: { type: DataTypes.INTEGER }
    },
    {}
  );
  BoutNumber.associate = function(models) {
    BoutNumber.belongsTo(models.WeightClass, {
      foreignKey: "bout_number_id",
      as: "match_number"
    });
    BoutNumber.belongsTo(models.BracketMatchResults, {
      foreignKey: "bout_number_id",
      as: "bracket_match_result"
    });
    BoutNumber.hasMany(models.TournamentWrestlers, {
      foreignKey: "tournament_wrestler_id_one",
      as: "wrestler_one"
    });
    BoutNumber.hasMany(models.TournamentWrestlers, {
      foreignKey: "tournament_wrestler_id_two",
      as: "wrestler_two"
    });
  };
  return BoutNumber;
};
