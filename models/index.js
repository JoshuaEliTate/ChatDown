const User = require('./User');
const PostComment = require('./PostComment');
// const Location = require('./Location');


User.hasOne(PostComment, {
  foreignKey: 'user_id',
});

// User.hasOne(Location, {
//   foreignKey: 'user_id',
// });

// PostComment.hasOne(Location, {
//   foreignKey: 'city',
// });

module.exports = { User, PostComment};
