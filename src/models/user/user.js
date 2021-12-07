const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  userId: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password);
  this.hashedPassword = hash; // 해시된 비밀번호
};

UserSchema.methods.checkedPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true or false
};

UserSchema.statics.findByUserId = function (userId) {
  return this.findOne({ userId });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
