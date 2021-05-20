const User = require('./User');
const Profile = require('./Profile');
const Group = require('./Group');
const Userpicks = require('./Userpicks');
const Historical = require('./Historical');

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
});

Group.hasMany(User, {
  foreignKey: 'user_id',
});

Group.belongsTo(User, {
  foreignKey: 'user_id',
});

Userpicks.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Group, Profile };
