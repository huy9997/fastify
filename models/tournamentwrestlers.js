"use strict";
module.exports = (sequelize, DataTypes) => {
  const TournamentWrestlers = sequelize.define(
    "TournamentWrestlers",
    {
      seeding_notes: DataTypes.STRING,
      user_wrestler_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      weight_class_id: { type: DataTypes.INTEGER },
      checked_in: { type: DataTypes.BOOLEAN }
    },
    {}
  );
  TournamentWrestlers.associate = function(models) {
    TournamentWrestlers.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "userTournamentSignUp"
    });
    TournamentWrestlers.belongsTo(models.WeightClass, {
      foreignKey: "weight_class_id",
      as: "tournament_wrestlers"
    });
    TournamentWrestlers.hasMany(models.BoutNumber, {
      foreignKey: "tournament_wrestler_id_one",
      as: "wrestler_one"
    });
    TournamentWrestlers.hasMany(models.BoutNumber, {
      foreignKey: "tournament_wrestler_id_two",
      as: "wrestler_two"
    });
  };
  return TournamentWrestlers;
};
