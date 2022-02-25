'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie_series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie_series.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    fecha: DataTypes.DATE,
    qualification: DataTypes.INTEGER,
    associated_character: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie_series',
  });
  return movie_series;
};