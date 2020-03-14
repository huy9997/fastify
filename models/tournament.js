"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define(
    "Tournament",
    {
      tournament_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tournament_location: { type: DataTypes.STRING },
      tournament_description: { type: DataTypes.STRING },
      tournament_start_date: { type: DataTypes.DATE },
      tournament_end_date: { type: DataTypes.DATE },
      wrestling_style: { type: DataTypes.STRING },
      wrestling_level: { type: DataTypes.STRING },
      tournament_flier: { type: DataTypes.STRING },
      tournament_logo: { type: DataTypes.STRING },
      tournament_active: { type: DataTypes.BOOLEAN },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Tournament.associate = function(models) {
    Tournament.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "admin"
    });
    Tournament.hasMany(models.WeightClass, {
      foreignKey: "tournament_id",
      as: "tournamentWeightClasses"
    });
  };
  return Tournament;
};
