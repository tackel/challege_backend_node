'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class generos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  generos.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    associated_movie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'generos',
  });
  return generos;
};