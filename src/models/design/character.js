const mongoose = require('mongoose');
const { Schema } = mongoose;

const SrcSchema = new Schema({
  id: mongoose.Types.ObjectId,
  originalName: String,
  src: String,
  rep: { type: Boolean, default: false },
});

const CharacterSchema = new Schema({
  title: String,
  content: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  imgs: [SrcSchema],
  user: {
    _id: mongoose.Types.ObjectId,
    userid: String,
  },
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
