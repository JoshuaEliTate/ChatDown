const User = require("./User");
const PostComment = require("./PostComment");


User.hasOne(PostComment, {
  foreignKey: 'user_id',
});

PostComment.belongsTo(User);

module.exports = { User, PostComment };
