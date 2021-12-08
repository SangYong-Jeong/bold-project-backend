const mongoose = require('mongoose');
const { Schema } = mongoose;

const SrcSchema = new Schema({
  id: mongoose.Types.ObjectId,
  src: String,
  rep: { type: Boolean, default: false },
});

const IllustrationSchema = new Schema({
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

const Illustration = mongoose.model('Illustration', IllustrationSchema);

module.exports = Illustration;
