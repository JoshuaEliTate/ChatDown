const User = require("./User");
const PostComment = require("./PostComment");


User.hasOne(PostComment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

PostComment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, PostComment };
