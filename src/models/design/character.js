const mongoose = require('mongoose');
const { Schema } = mongoose;

const SrcSchema = new Schema({
  id: Number,
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
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
