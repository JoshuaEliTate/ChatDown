const User = require('./User');
const PostComment = require('./PostComment');

User.hasMany(PostComment, {
  foreignKey: 'user_id',
});

PostComment.belongsTo(User)

module.exports = { User, PostComment};
