"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      first_name: { type: DataTypes.STRING },
      last_name: { type: DataTypes.STRING },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      wins: { type: DataTypes.INTEGER },
      losses: { type: DataTypes.INTEGER },
      wrestling_level: { type: DataTypes.STRING },
      type_of_account: {
        type: DataTypes.STRING,
        allowNull: false
      },
      active: { type: DataTypes.BOOLEAN }
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Tournament, {
      foreignKey: "user_id",
      as: "admin"
    });
    User.hasMany(models.TournamentWrestlers, {
      foreignKey: "user_wrestler_id",
      as: "tournamentWrestlers"
    });
  };
  return User;
};
