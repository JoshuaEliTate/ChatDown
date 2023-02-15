const User = require('./User');
const PostComment = require('./PostComment');
const PostReply = require('./Reply');

User.hasMany(PostComment, {
  foreignKey: 'user_id',
});

PostComment.hasMany(Reply, {
  foreignKey: 'user_id',
});

PostComment.belongsTo(User)

module.exports = { User, PostComment, PostReply};
