'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Box, User }) {
      this.belongsTo(Box, { foreignKey: 'boxId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Comment.init(
    {
      text: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      boxId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
