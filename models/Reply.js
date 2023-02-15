const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class PostReply extends Model {}

PostReply.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    replyComment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'postcomment',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reply',
  }
);

module.exports = PostReply;
