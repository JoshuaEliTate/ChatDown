const User = require('./User');
const PostComment = require('./PostComment');

User.hasMany(PostComment, {
  foreignKey: 'user_id',
});

module.exports = { User, PostComment};
