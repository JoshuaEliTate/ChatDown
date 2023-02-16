const User = require("./User");
const PostComment = require("./PostComment");
const PostReply = require("./ReplyComment");

//associations
User.hasMany(PostComment, {
  foreignKey: "user_id",
});

PostComment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

PostComment.hasMany(PostReply, {
  foreignKey: "comment_id",
});

PostComment.belongsTo(User);

PostReply.belongsTo(PostComment);

module.exports = { User, PostComment, PostReply };
