const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PostComment extends Model {}

PostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // username: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "user",
    //     key: "username",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "PostComment",
  }
);

module.exports = PostComment;
