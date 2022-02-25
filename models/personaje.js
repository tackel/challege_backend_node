"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personaje.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      ege: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      history: DataTypes.TEXT,
      associated_movie: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Personaje",
    }
  );
  return Personaje;
};
