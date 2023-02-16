const User = require('./User');
const PostComment = require('./PostComment');
const PostReply = require('./ReplyComment');

User.hasMany(PostComment, {
  foreignKey: 'user_id',
});

PostComment.hasMany(PostReply, {
  foreignKey: 'comment_id',
});

PostComment.belongsTo(User)

PostReply.belongsTo(PostComment)

module.exports = { User, PostComment, PostReply};
