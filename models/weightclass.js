"use strict";
module.exports = (sequelize, DataTypes) => {
  const WeightClass = sequelize.define(
    "WeightClass",
    {
      tournament_id: {
        type: DataTypes.INTEGER
      },
      weight_class: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  WeightClass.associate = function(models) {
    WeightClass.belongsTo(models.Tournament, {
      foreignKey: "tournament_id",
      as: "tournament"
    });
    WeightClass.hasMany(models.TournamentWrestlers, {
      foreignKey: "weight_class_id",
      as: "weight_classes"
    });
    WeightClass.hasMany(models.BoutNumber, {
      foreignKey: "bout_number_id",
      as: "bout_number"
    });
  };
  return WeightClass;
};
