'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      this.hasMany(Comment, { foreignKey: 'boxId' });
    }
  }
  Box.init(
    {
      title: DataTypes.STRING,
      img: DataTypes.STRING,
      price: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Box',
    },
  );
  return Box;
};
